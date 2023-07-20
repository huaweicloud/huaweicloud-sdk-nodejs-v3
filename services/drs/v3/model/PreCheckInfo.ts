

export class PreCheckInfo {
    private 'job_id'?: string;
    private 'precheck_mode'?: PreCheckInfoPrecheckModeEnum | string;
    public constructor(jobId?: string, precheckMode?: string) { 
        this['job_id'] = jobId;
        this['precheck_mode'] = precheckMode;
    }
    public withJobId(jobId: string): PreCheckInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withPrecheckMode(precheckMode: PreCheckInfoPrecheckModeEnum | string): PreCheckInfo {
        this['precheck_mode'] = precheckMode;
        return this;
    }
    public set precheckMode(precheckMode: PreCheckInfoPrecheckModeEnum | string  | undefined) {
        this['precheck_mode'] = precheckMode;
    }
    public get precheckMode(): PreCheckInfoPrecheckModeEnum | string | undefined {
        return this['precheck_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PreCheckInfoPrecheckModeEnum {
    FORSTARTJOB = 'forStartJob',
    FORRETRYJOB = 'forRetryJob'
}
