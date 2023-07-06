

export class PreCheckInfo {
    private 'job_id': string | undefined;
    private 'precheck_mode': PreCheckInfoPrecheckModeEnum | undefined;
    public constructor(jobId?: any, precheckMode?: any) { 
        this['job_id'] = jobId;
        this['precheck_mode'] = precheckMode;
    }
    public withJobId(jobId: string): PreCheckInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withPrecheckMode(precheckMode: PreCheckInfoPrecheckModeEnum): PreCheckInfo {
        this['precheck_mode'] = precheckMode;
        return this;
    }
    public set precheckMode(precheckMode: PreCheckInfoPrecheckModeEnum | undefined) {
        this['precheck_mode'] = precheckMode;
    }
    public get precheckMode() {
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
