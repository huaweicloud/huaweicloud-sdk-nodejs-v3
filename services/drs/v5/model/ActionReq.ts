import { ActionParams } from './ActionParams';


export class ActionReq {
    private 'job_id'?: string | undefined;
    private 'action_name': ActionReqActionNameEnum | undefined;
    private 'action_params'?: ActionParams | undefined;
    public constructor(actionName?: any) { 
        this['action_name'] = actionName;
    }
    public withJobId(jobId: string): ActionReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withActionName(actionName: ActionReqActionNameEnum): ActionReq {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: ActionReqActionNameEnum | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName() {
        return this['action_name'];
    }
    public withActionParams(actionParams: ActionParams): ActionReq {
        this['action_params'] = actionParams;
        return this;
    }
    public set actionParams(actionParams: ActionParams | undefined) {
        this['action_params'] = actionParams;
    }
    public get actionParams() {
        return this['action_params'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionReqActionNameEnum {
    NETWORK = 'network',
    PRECHECK = 'precheck',
    START = 'start',
    STOP = 'stop',
    RESTART = 'restart',
    RESET = 'reset',
    TERMINATE = 'terminate',
    SKIP_PRECHECK = 'skip_precheck',
    CREATE_COMPARE = 'create_compare',
    CANCEL_COMPARE = 'cancel_compare'
}
