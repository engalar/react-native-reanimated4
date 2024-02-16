import type { SharedValue } from '../commonTypes';
import type { DependencyList } from './commonTypes';
export type DerivedValue<Value> = Readonly<SharedValue<Value>>;
/**
 * Lets you create new shared values based on existing ones while keeping them reactive.
 *
 * @param updater - A function called whenever at least one of the shared values or state used in the function body changes.
 * @param dependencies - An optional array of dependencies. Only relevant when using Reanimated without the Babel plugin on the Web.
 * @returns A new readonly shared value based on a value returned from the updater function
 * @see https://docs.swmansion.com/react-native-reanimated/docs/core/useDerivedValue
 */
export declare function useDerivedValue<Value>(updater: () => Value, dependencies?: DependencyList): DerivedValue<Value>;
