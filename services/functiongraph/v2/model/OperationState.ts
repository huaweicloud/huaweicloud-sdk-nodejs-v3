import { Action } from './Action';
import { OnError } from './OnError';
import { StateDataFilter } from './StateDataFilter';


export class OperationState {
    public id?: string;
    public name?: string;
    public type?: OperationStateTypeEnum;
    public end?: boolean;
    public transition?: string;
    private 'state_data_filter'?: StateDataFilter | undefined;
    private 'action_mode'?: OperationStateActionModeEnum | undefined;
    public actions?: Array<Action>;
    private 'on_errors'?: Array<OnError> | undefined;
    public constructor() { 
    }
    public withId(id: string): OperationState {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OperationState {
        this['name'] = name;
        return this;
    }
    public withType(type: OperationStateTypeEnum): OperationState {
        this['type'] = type;
        return this;
    }
    public withEnd(end: boolean): OperationState {
        this['end'] = end;
        return this;
    }
    public withTransition(transition: string): OperationState {
        this['transition'] = transition;
        return this;
    }
    public withStateDataFilter(stateDataFilter: StateDataFilter): OperationState {
        this['state_data_filter'] = stateDataFilter;
        return this;
    }
    public set stateDataFilter(stateDataFilter: StateDataFilter | undefined) {
        this['state_data_filter'] = stateDataFilter;
    }
    public get stateDataFilter() {
        return this['state_data_filter'];
    }
    public withActionMode(actionMode: OperationStateActionModeEnum): OperationState {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: OperationStateActionModeEnum | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode() {
        return this['action_mode'];
    }
    public withActions(actions: Array<Action>): OperationState {
        this['actions'] = actions;
        return this;
    }
    public withOnErrors(onErrors: Array<OnError>): OperationState {
        this['on_errors'] = onErrors;
        return this;
    }
    public set onErrors(onErrors: Array<OnError> | undefined) {
        this['on_errors'] = onErrors;
    }
    public get onErrors() {
        return this['on_errors'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OperationStateTypeEnum {
    OPERATION = 'Operation',
    SLEEP = 'Sleep',
    END = 'End'
}
/**
    * @export
    * @enum {string}
    */
export enum OperationStateActionModeEnum {
    SEQUENTIAL = 'sequential',
    PARALLEL = 'parallel'
}
