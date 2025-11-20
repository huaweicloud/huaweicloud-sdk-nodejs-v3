

export class CheckTaskRisk {
    public riskName?: string;
    public level?: CheckTaskRiskLevelEnum | string;
    public status?: CheckTaskRiskStatusEnum | string;
    public message?: string;
    public constructor(riskName?: string, level?: string, status?: string) { 
        this['riskName'] = riskName;
        this['level'] = level;
        this['status'] = status;
    }
    public withRiskName(riskName: string): CheckTaskRisk {
        this['riskName'] = riskName;
        return this;
    }
    public withLevel(level: CheckTaskRiskLevelEnum | string): CheckTaskRisk {
        this['level'] = level;
        return this;
    }
    public withStatus(status: CheckTaskRiskStatusEnum | string): CheckTaskRisk {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CheckTaskRisk {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckTaskRiskLevelEnum {
    WARNING = 'Warning',
    FATAL = 'Fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum CheckTaskRiskStatusEnum {
    INIT = 'Init',
    RUNNING = 'Running',
    FAILED = 'Failed',
    SUCCESS = 'Success'
}
