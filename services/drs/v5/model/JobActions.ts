

export class JobActions {
    private 'available_actions'?: Array<string>;
    private 'unavailable_actions'?: Array<string>;
    private 'current_action'?: JobActionsCurrentActionEnum | string;
    public constructor(availableActions?: Array<string>, unavailableActions?: Array<string>, currentAction?: string) { 
        this['available_actions'] = availableActions;
        this['unavailable_actions'] = unavailableActions;
        this['current_action'] = currentAction;
    }
    public withAvailableActions(availableActions: Array<string>): JobActions {
        this['available_actions'] = availableActions;
        return this;
    }
    public set availableActions(availableActions: Array<string>  | undefined) {
        this['available_actions'] = availableActions;
    }
    public get availableActions(): Array<string> | undefined {
        return this['available_actions'];
    }
    public withUnavailableActions(unavailableActions: Array<string>): JobActions {
        this['unavailable_actions'] = unavailableActions;
        return this;
    }
    public set unavailableActions(unavailableActions: Array<string>  | undefined) {
        this['unavailable_actions'] = unavailableActions;
    }
    public get unavailableActions(): Array<string> | undefined {
        return this['unavailable_actions'];
    }
    public withCurrentAction(currentAction: JobActionsCurrentActionEnum | string): JobActions {
        this['current_action'] = currentAction;
        return this;
    }
    public set currentAction(currentAction: JobActionsCurrentActionEnum | string  | undefined) {
        this['current_action'] = currentAction;
    }
    public get currentAction(): JobActionsCurrentActionEnum | string | undefined {
        return this['current_action'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobActionsCurrentActionEnum {
    API_CONFIGURATION_ACTION = 'API_CONFIGURATION_ACTION',
    CHANGE = 'CHANGE',
    CHANGE_MODE = 'CHANGE_MODE',
    CHOOSE_OBJECT = 'CHOOSE_OBJECT',
    CLONE = 'CLONE',
    CONTINUE_APPLY = 'CONTINUE_APPLY',
    CONTINUE_CAPTURE = 'CONTINUE_CAPTURE',
    CONTINUE_JOB = 'CONTINUE_JOB',
    CREATE = 'CREATE',
    DELETE = 'DELETE',
    FREE_RESOURCE = 'FREE_RESOURCE',
    JUMP_RETRY = 'JUMP_RETRY',
    MODIFY_CONFIGURATION = 'MODIFY_CONFIGURATION',
    MODIFY_DB_CONFIG = 'MODIFY_DB_CONFIG',
    MODIFY_TASK_NUMBER = 'MODIFY_TASK_NUMBER',
    NODE_FLAVOR_MODIFY = 'NODE_FLAVOR_MODIFY',
    ORDER_INFO = 'ORDER_INFO',
    PAUSE = 'PAUSE',
    PAY_ORDER = 'PAY_ORDER',
    PRE_CHECK = 'PRE_CHECK',
    QUERY_PRE_CHECK = 'QUERY_PRE_CHECK',
    RESET = 'RESET',
    RESET_DB_PWD = 'RESET_DB_PWD',
    RETRY = 'RETRY',
    START = 'START',
    START_INCR = 'START_INCR',
    STOP_APPLY = 'STOP_APPLY',
    STOP_CAPTURE = 'STOP_CAPTURE',
    STOP_JOB = 'STOP_JOB',
    SWITCH_OVER = 'SWITCH_OVER',
    TO_PERIOD = 'TO_PERIOD',
    TO_RENEW = 'TO_RENEW',
    UNSUBSCRIBE = 'UNSUBSCRIBE'
}
