

export class JobActionResp {
    private 'available_actions'?: Array<JobActionRespAvailableActionsEnum> | undefined;
    private 'unavailable_actions'?: Array<JobActionRespUnavailableActionsEnum> | undefined;
    private 'current_action'?: JobActionRespCurrentActionEnum | undefined;
    public constructor() { 
    }
    public withAvailableActions(availableActions: Array<JobActionRespAvailableActionsEnum>): JobActionResp {
        this['available_actions'] = availableActions;
        return this;
    }
    public set availableActions(availableActions: Array<JobActionRespAvailableActionsEnum> | undefined) {
        this['available_actions'] = availableActions;
    }
    public get availableActions() {
        return this['available_actions'];
    }
    public withUnavailableActions(unavailableActions: Array<JobActionRespUnavailableActionsEnum>): JobActionResp {
        this['unavailable_actions'] = unavailableActions;
        return this;
    }
    public set unavailableActions(unavailableActions: Array<JobActionRespUnavailableActionsEnum> | undefined) {
        this['unavailable_actions'] = unavailableActions;
    }
    public get unavailableActions() {
        return this['unavailable_actions'];
    }
    public withCurrentAction(currentAction: JobActionRespCurrentActionEnum): JobActionResp {
        this['current_action'] = currentAction;
        return this;
    }
    public set currentAction(currentAction: JobActionRespCurrentActionEnum | undefined) {
        this['current_action'] = currentAction;
    }
    public get currentAction() {
        return this['current_action'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobActionRespAvailableActionsEnum {
    CREATE = 'CREATE',
    CHOOSE_OBJECT = 'CHOOSE_OBJECT',
    PRE_CHECK = 'PRE_CHECK',
    CHANGE_MODE = 'CHANGE_MODE',
    FREE_RESOURCE = 'FREE_RESOURCE',
    MODIFY_DB_CONFIG = 'MODIFY_DB_CONFIG',
    RESET_DB_PWD = 'RESET_DB_PWD',
    MODIFY_CONFIGURATION = 'MODIFY_CONFIGURATION',
    PAUSE = 'PAUSE',
    START = 'START',
    CHANGE = 'CHANGE',
    RETRY = 'RETRY',
    RESET = 'RESET',
    DELETE = 'DELETE',
    QUERY_PRE_CHECK = 'QUERY_PRE_CHECK',
    SWITCH_OVER = 'SWITCH_OVER',
    MODIFY_SPECIFICATION_ID = 'MODIFY_SPECIFICATION_ID',
    JUMP_RETRY = 'JUMP_RETRY',
    START_INCR = 'START_INCR',
    MODIFY_TASK_NUMBER = 'MODIFY_TASK_NUMBER',
    CONTINUE_JOB = 'CONTINUE_JOB',
    STOP_JOB = 'STOP_JOB',
    CONTINUE_CAPTURE = 'CONTINUE_CAPTURE',
    STOP_CAPTURE = 'STOP_CAPTURE',
    CONTINUE_APPLY = 'CONTINUE_APPLY',
    API_CONFIGURATION_ACTION = 'API_CONFIGURATION_ACTION',
    STOP_APPLY = 'STOP_APPLY',
    PAY_ORDER = 'PAY_ORDER',
    UNSUBSCRIBE = 'UNSUBSCRIBE',
    TO_PERIOD = 'TO_PERIOD',
    TO_RENEW = 'TO_RENEW',
    ORDER_INFO = 'ORDER_INFO',
    CHANGE_FLAVOR = 'CHANGE_FLAVOR',
    CLONE = 'CLONE'
}
/**
    * @export
    * @enum {string}
    */
export enum JobActionRespUnavailableActionsEnum {
    CREATE = 'CREATE',
    CHOOSE_OBJECT = 'CHOOSE_OBJECT',
    PRE_CHECK = 'PRE_CHECK',
    CHANGE_MODE = 'CHANGE_MODE',
    FREE_RESOURCE = 'FREE_RESOURCE',
    MODIFY_DB_CONFIG = 'MODIFY_DB_CONFIG',
    RESET_DB_PWD = 'RESET_DB_PWD',
    MODIFY_CONFIGURATION = 'MODIFY_CONFIGURATION',
    PAUSE = 'PAUSE',
    START = 'START',
    CHANGE = 'CHANGE',
    RETRY = 'RETRY',
    RESET = 'RESET',
    DELETE = 'DELETE',
    QUERY_PRE_CHECK = 'QUERY_PRE_CHECK',
    SWITCH_OVER = 'SWITCH_OVER',
    MODIFY_SPECIFICATION_ID = 'MODIFY_SPECIFICATION_ID',
    JUMP_RETRY = 'JUMP_RETRY',
    START_INCR = 'START_INCR',
    MODIFY_TASK_NUMBER = 'MODIFY_TASK_NUMBER',
    CONTINUE_JOB = 'CONTINUE_JOB',
    STOP_JOB = 'STOP_JOB',
    CONTINUE_CAPTURE = 'CONTINUE_CAPTURE',
    STOP_CAPTURE = 'STOP_CAPTURE',
    CONTINUE_APPLY = 'CONTINUE_APPLY',
    API_CONFIGURATION_ACTION = 'API_CONFIGURATION_ACTION',
    STOP_APPLY = 'STOP_APPLY',
    PAY_ORDER = 'PAY_ORDER',
    UNSUBSCRIBE = 'UNSUBSCRIBE',
    TO_PERIOD = 'TO_PERIOD',
    TO_RENEW = 'TO_RENEW',
    ORDER_INFO = 'ORDER_INFO',
    CHANGE_FLAVOR = 'CHANGE_FLAVOR',
    CLONE = 'CLONE'
}
/**
    * @export
    * @enum {string}
    */
export enum JobActionRespCurrentActionEnum {
    SWITCH_OVER = 'SWITCH_OVER',
    STOP_JOB = 'STOP_JOB'
}
