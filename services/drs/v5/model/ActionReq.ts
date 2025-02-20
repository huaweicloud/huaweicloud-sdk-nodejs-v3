import { ActionParams } from './ActionParams';


export class ActionReq {
    private 'job_id'?: string;
    private 'action_name'?: ActionReqActionNameEnum | string;
    private 'action_params'?: ActionParams;
    public constructor(actionName?: string) { 
        this['action_name'] = actionName;
    }
    public withJobId(jobId: string): ActionReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withActionName(actionName: ActionReqActionNameEnum | string): ActionReq {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: ActionReqActionNameEnum | string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): ActionReqActionNameEnum | string | undefined {
        return this['action_name'];
    }
    public withActionParams(actionParams: ActionParams): ActionReq {
        this['action_params'] = actionParams;
        return this;
    }
    public set actionParams(actionParams: ActionParams  | undefined) {
        this['action_params'] = actionParams;
    }
    public get actionParams(): ActionParams | undefined {
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
    CANCEL_COMPARE = 'cancel_compare',
    COLUMN_LIMIT = 'column_limit',
    RELOAD_PARAMETERS = 'reload_parameters',
    BIND_EIP = 'bind_eip',
    UNBIND_EIP = 'unbind_eip',
    SET_WRITABLE = 'set_writable',
    CLOUD_CONNECTION = 'cloud_connection',
    SET_READONLY = 'set_readonly',
    DIAGNOSIS = 'diagnosis：一键诊断。',
    START_REPAIR = 'start_repair：开始数据修复。',
    STOP_REPAIR = 'stop_repair：停止数据修复。'
}
