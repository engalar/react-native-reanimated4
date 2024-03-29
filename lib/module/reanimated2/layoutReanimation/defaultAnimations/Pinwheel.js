'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ComplexAnimationBuilder } from '../animationBuilder';
/**
 * Entry with change in rotation, scale, and opacity. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#pinwheel
 */
export class PinwheelIn extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              scale: delayFunction(delay, animation(1, config))
            }, {
              rotate: delayFunction(delay, animation('0', config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              scale: 0
            }, {
              rotate: '5'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new PinwheelIn();
  }
}

/**
 * Exit with change in rotation, scale, and opacity. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#pinwheel
 */
_defineProperty(PinwheelIn, "presetName", 'PinwheelIn');
export class PinwheelOut extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              scale: delayFunction(delay, animation(0, config))
            }, {
              rotate: delayFunction(delay, animation('5', config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              scale: 1
            }, {
              rotate: '0'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new PinwheelOut();
  }
}
_defineProperty(PinwheelOut, "presetName", 'PinwheelOut');
//# sourceMappingURL=Pinwheel.js.map