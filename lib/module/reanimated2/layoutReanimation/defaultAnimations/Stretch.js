'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ComplexAnimationBuilder } from '../animationBuilder';

/**
 * Stretch animation on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#stretch
 */
export class StretchInX extends ComplexAnimationBuilder {
  constructor() {
    super(...arguments);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleX: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleX: 0
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new StretchInX();
  }
}

/**
 * Stretch animation on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#stretch
 */
_defineProperty(StretchInX, "presetName", 'StretchInX');
export class StretchInY extends ComplexAnimationBuilder {
  constructor() {
    super(...arguments);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleY: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleY: 0
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new StretchInY();
  }
}

/**
 * Stretch animation on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#stretch
 */
_defineProperty(StretchInY, "presetName", 'StretchInY');
export class StretchOutX extends ComplexAnimationBuilder {
  constructor() {
    super(...arguments);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleX: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleX: 1
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new StretchOutX();
  }
}

/**
 * Stretch animation on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#stretch
 */
_defineProperty(StretchOutX, "presetName", 'StretchOutX');
export class StretchOutY extends ComplexAnimationBuilder {
  constructor() {
    super(...arguments);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scaleY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              scaleY: 1
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new StretchOutY();
  }
}
_defineProperty(StretchOutY, "presetName", 'StretchOutY');
//# sourceMappingURL=Stretch.js.map