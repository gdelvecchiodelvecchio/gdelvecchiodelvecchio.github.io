// starfield


const F = () => {
      var x = function (v) {
        var l = {};
        function n(s) {
          if (l[s]) return l[s].exports;
          var a = l[s] = {
            i: s,
            l: !1,
            exports: {
            }
          };
          return v[s].call(a.exports, a, a.exports, n),
          a.l = !0,
          a.exports
        }
        return n.m = v,
        n.c = l,
        n.d = function (s, a, r) {
          n.o(s, a) ||
          Object.defineProperty(s, a, {
            enumerable: !0,
            get: r
          })
        },
        n.r = function (s) {
          typeof Symbol < 'u' &&
          Symbol.toStringTag &&
          Object.defineProperty(s, Symbol.toStringTag, {
            value: 'Module'
          }),
          Object.defineProperty(s, '__esModule', {
            value: !0
          })
        },
        n.t = function (s, a) {
          if (1 & a && (s = n(s)), 8 & a || 4 & a && typeof s == 'object' && s && s.__esModule) return s;
          var r = Object.create(null);
          if (
            n.r(r),
            Object.defineProperty(r, 'default', {
              enumerable: !0,
              value: s
            }),
            2 & a &&
            typeof s != 'string'
          ) for (var u in s) n.d(r, u, (function (m) {
            return s[m]
          }).bind(null, u));
          return r
        },
        n.n = function (s) {
          var a = s &&
          s.__esModule ? function () {
            return s.default
          }
           : function () {
            return s
          };
          return n.d(a, 'a', a),
          a
        },
        n.o = function (s, a) {
          return Object.prototype.hasOwnProperty.call(s, a)
        },
        n.p = '',
        n(n.s = 0)
      }(
        [function (v, l, n) {
          n.r(l);
          class s {
            constructor() {
              this.animate = !1,
              this.frameReqId = 0,
              this.frameTasks = [],
              this.lastFrameTaskId = 0,
              this.loop = (t = 0) => {
                const i = this.frameTasks.length;
                for (let e = 0; e < i; e++) this.frameTasks[e].fn(t);
                this.frameReqId = requestAnimationFrame(this.loop)
              },
              this.addTasks = this.addTasks.bind(this)
            }
            addTask(t) {
              return this.addTasks([t]) [0]
            }
            addTasks(t) {
              const i = [];
              return t.length == 0 ||
              t.forEach(
                e => {
                  this.frameTasks.push({
                    id: this.lastFrameTaskId,
                    fn: e
                  }),
                  i.push(this.lastFrameTaskId),
                  this.lastFrameTaskId++
                }
              ),
              i
            }
            deleteTask(t) {
              this.frameTasks = this.frameTasks.filter(i => i.id !== t)
            }
            start(t) {
              this.animate ||
              (this.animate = !0, this.loop())
            }
            stop() {
              cancelAnimationFrame(this.frameReqId),
              this.animate = !1
            }
          }
          const a = (h, t, i, e, o) => (h - t) * (o - e) / (i - t) + e;
          var r = {
            r: 255,
            b: 255,
            g: 255
          },
          u = function () {
            function h(t) {
              this.x = 0,
              this.y = 0,
              this.z = 0,
              this.v = 0,
              this.radius = 0,
              this.lastX = 0,
              this.lastY = 0,
              this.splashLimitX = [
                0,
                0
              ],
              this.splashLimitY = [
                0,
                0
              ];
              var i = t.ctx,
              e = t.W,
              o = t.H,
              f = t.hW,
              c = t.hH,
              d = t.minV,
              p = t.maxV,
              k = t.color,
              W = t.glow,
              X = t.trails,
              z = t.addTasks;
              this.ctx = i,
              this.W = e,
              this.H = o,
              this.hW = f,
              this.hH = c,
              this.minV = d,
              this.maxV = p,
              this.glow = W,
              this.trails = X,
              this.color = k ||
              r,
              this.splashLimitX = [
                - f,
                f
              ],
              this.splashLimitY = [
                - c,
                c
              ],
              this.addTasks = z,
              this.reset(!0)
            }
            return h.prototype.getInitialZ = function () {
              return 2 * (this.W > this.H ? this.H : this.W)
            },
            h.prototype.draw = function (t, i) {
              this.z -= this.v,
              this.z <= 0 &&
              this.reset();
              var e = this.W * (this.x / this.z) - t,
              o = this.H * (this.y / this.z) - i,
              f = this.getInitialZ(),
              c = (1 - a(this.z, 0, f, 0, 1)) * this.radius,
              d = Math.round(10 - a(this.z, 0, f, 0, 10)) / 10,
              p = d / 4;
              this.trails &&
              this.lastX !== this.x &&
              (
                this.ctx.lineWidth = c,
                this.ctx.strokeStyle = 'rgba(' + this.color.r + ', ' + this.color.g + ', ' + this.color.b + ', ' + p + ')',
                this.ctx.beginPath(),
                this.ctx.moveTo(e, o),
                this.ctx.lineTo(this.lastX, this.lastY),
                this.ctx.stroke()
              ),
              this.glow &&
              (
                this.ctx.save(),
                this.ctx.shadowBlur = 5,
                this.ctx.shadowColor = '#FFF'
              ),
              this.ctx.fillStyle = 'rgb(' + this.color.r + ', ' + this.color.g + ', ' + this.color.b + ', ' + d + ')',
              this.ctx.beginPath(),
              this.ctx.arc(e, o, c, 0, 2 * Math.PI),
              this.ctx.fill(),
              this.glow &&
              this.ctx.restore(),
              this.lastX = e,
              this.lastY = o
            },
            h.prototype.reset = function (t) {
              t === void 0 &&
              (t = !1),
              this.x = Math.random() * this.W - this.hW,
              this.y = Math.random() * this.H - this.hH,
              this.v = Math.random() * (this.maxV - this.minV) + this.minV,
              this.radius = Number((2 * Math.random() + 1).toPrecision(3)),
              this.lastX = this.x,
              this.lastY = this.y,
              this.z = t ? Math.random() * this.getInitialZ() : this.getInitialZ()
            },
            h
          }();
          n.d(l, 'StarField', function () {
            return m
          });
          var m = function () {
            function h(t, i) {
              var e = this;
              if (
                i === void 0 &&
                (i = {}),
                this.defaultMaxV = 5,
                this.defaultMinV = 2,
                this.defaultNumStars = 400,
                this.initialized = !1,
                this.canvasW = 0,
                this.canvasH = 0,
                this.canvasHalfW = 0,
                this.canvasHalfH = 0,
                this.offsetX = 0,
                this.offsetY = 0,
                this.offsetTX = 0,
                this.offsetTY = 0,
                this.stars = [],
                this.resizeTimeout = 0,
                !t
              ) throw 'First argument "id" is required';
              this.color = i.color ||
              r,
              this.glow = i.glow ||
              !1,
              this.minV = i.minV ||
              this.defaultMinV,
              this.maxV = i.maxV ||
              this.defaultMaxV,
              this.numStars = this.defaultNumStars,
              this.trails = i.trails ||
              !1,
              this.canvas = document.getElementById(t),
              this.ctx = this.canvas.getContext('2d');
              var o = this.canvas.getBoundingClientRect();
              this.canvasRectLeft = o.left,
              this.canvasRectTop = o.top,
              this.followContext = i.followContext ||
              this.canvas,
              this.handleMouseMove = this.handleMouseMove.bind(this),
              this.engine = new s,
              this.engine.addTask(this.draw.bind(this)),
              window.addEventListener('blur', function () {
                e.stop()
              }),
              window.addEventListener('focus', function () {
                e.start()
              }),
              window.addEventListener(
                'resize',
                function () {
                  clearTimeout(e.resizeTimeout),
                  e.stop(),
                  e.resizeTimeout = setTimeout(function () {
                    e.reset(),
                    e.start()
                  }, 500)
                }
              ),
              this.numStars = i.numStars ? Math.abs(i.numStars) : this.defaultNumStars,
              this.setupCanvas(),
              this.generateStars(),
              this.initialized = !0,
              i.followMouse &&
              this.setFollowMouse(!0)
            }
            return h.prototype.generateStars = function () {
              for (var t = 0; t < this.numStars; t++) this.stars.push(
                new u({
                  ctx: this.ctx,
                  W: this.canvasW,
                  H: this.canvasH,
                  hW: this.canvasHalfW,
                  hH: this.canvasHalfH,
                  minV: this.minV,
                  maxV: this.maxV,
                  color: this.color,
                  glow: this.glow,
                  trails: this.trails,
                  addTasks: this.engine.addTasks
                })
              )
            },
            h.prototype.setupCanvas = function () {
              var t = window.getComputedStyle(this.canvas);
              this.canvas.setAttribute('height', t.height),
              this.canvas.setAttribute('width', t.width),
              this.canvasH = this.canvas.height,
              this.canvasW = this.canvas.width,
              this.canvasHalfH = this.canvasH / 2,
              this.canvasHalfW = this.canvasW / 2,
              this.ctx.translate(this.canvasHalfW, this.canvasHalfH)
            },
            h.prototype.draw = function () {
              for (
                var t in this.offsetX !== this.offsetTX &&
                (
                  this.offsetX += 0.02 * (this.offsetTX - this.offsetX),
                  this.offsetY += 0.02 * (this.offsetTY - this.offsetY)
                ),
                this.ctx.clearRect(
                  - this.canvasHalfW,
                  - this.canvasHalfH,
                  this.canvasW,
                  this.canvasH
                ),
                this.stars
              ) this.stars[t].draw(this.offsetX, this.offsetY)
            },
            h.prototype.handleMouseMove = function (t) {
              this.initialized &&
              (
                this.offsetTX = t.clientX - this.canvasRectLeft - this.canvasHalfW,
                this.offsetTY = t.clientY - this.canvasRectTop - this.canvasHalfH
              )
            },
            h.prototype.resetMouseOffset = function () {
              this.offsetTX = 0,
              this.offsetTY = 0
            },
            h.prototype.start = function () {
              this.engine.start()
            },
            h.prototype.stop = function () {
              this.engine.stop()
            },
            h.prototype.reset = function () {
              this.stars = [],
              this.setupCanvas(),
              this.generateStars()
            },
            h.prototype.setMaxV = function (t) {
              this.maxV = t ? Math.abs(t) : this.defaultMaxV,
              this.reset()
            },
            h.prototype.setMinV = function (t) {
              this.minV = t ? Math.abs(t) : this.defaultMinV,
              this.reset()
            },
            h.prototype.setNumStars = function (t) {
              this.numStars = t ? Math.abs(t) : this.defaultNumStars,
              this.reset()
            },
            h.prototype.setFollowMouse = function (t) {
              t ? this.followContext.addEventListener('mousemove', this.handleMouseMove) : (
                this.followContext.removeEventListener('mousemove', this.handleMouseMove),
                this.resetMouseOffset()
              )
            },
            h
          }()
        }
        ]
      ),
      g = 'space',
      w = !1,
      T = {
        r: 255,
        g: 255,
        b: 255
      },
      M = !1,
      y = 1,
      H = 5,
      b = 500,
      V = !0,
      S = new x.StarField(
        g,
        {
          followMouse: w,
          color: T,
          glow: M,
          minV: y,
          maxV: H,
          numStars: b,
          trails: V
        }
      );
      S.start()
    };
    F();
    