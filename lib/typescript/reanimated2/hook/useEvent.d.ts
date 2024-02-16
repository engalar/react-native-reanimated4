import type { MutableRefObject } from 'react';
import WorkletEventHandler from '../WorkletEventHandler';
import type { ReanimatedEvent } from './commonTypes';
/**
 * Worklet to provide as an argument to `useEvent` hook.
 */
export type EventHandler<Event extends object, Context extends Record<string, unknown> = never> = (event: ReanimatedEvent<Event>, context?: Context) => void;
export type EventHandlerProcessed<Event extends object, Context extends Record<string, unknown> = never> = (event: Event, context?: Context) => void;
export type EventHandlerInternal<Event extends object> = MutableRefObject<WorkletEventHandler<Event>>;
/**
 * Lets you run a function whenever a specified native event occurs.
 *
 * @param handler - A function that receives an event object with event data - {@link EventHandler}.
 * @param eventNames - An array of event names the `handler` callback will react to.
 * @param rebuild - Whether the event handler should be rebuilt. Defaults to `false`.
 * @returns A function that will be called when the event occurs - {@link EventHandlerProcessed}.
 * @see https://docs.swmansion.com/react-native-reanimated/docs/advanced/useEvent
 */
export declare function useEvent<Event extends object, Context extends Record<string, unknown> = never>(handler: EventHandler<Event, Context>, eventNames?: string[], rebuild?: boolean): EventHandlerProcessed<Event, Context>;
