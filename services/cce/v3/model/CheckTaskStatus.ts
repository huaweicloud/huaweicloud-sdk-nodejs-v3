import { CheckTaskRisk } from './CheckTaskRisk';


export class CheckTaskStatus {
    public status?: CheckTaskStatusStatusEnum | string;
    public message?: string;
    public riskList?: Array<CheckTaskRisk>;
    public constructor(status?: string, message?: string) { 
        this['status'] = status;
        this['message'] = message;
    }
    public withStatus(status: CheckTaskStatusStatusEnum | string): CheckTaskStatus {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CheckTaskStatus {
        this['message'] = message;
        return this;
    }
    public withRiskList(riskList: Array<CheckTaskRisk>): CheckTaskStatus {
        this['riskList'] = riskList;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckTaskStatusStatusEnum {
    INIT = 'Init',
    RUNNING = 'Running',
    FAILED = 'Failed',
    SUCCESS = 'Success'
}
