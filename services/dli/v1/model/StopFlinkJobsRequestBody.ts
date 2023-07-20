

export class StopFlinkJobsRequestBody {
    private 'trigger_savepoint'?: boolean;
    private 'job_ids'?: Array<number>;
    public constructor(jobIds?: Array<number>) { 
        this['job_ids'] = jobIds;
    }
    public withTriggerSavepoint(triggerSavepoint: boolean): StopFlinkJobsRequestBody {
        this['trigger_savepoint'] = triggerSavepoint;
        return this;
    }
    public set triggerSavepoint(triggerSavepoint: boolean  | undefined) {
        this['trigger_savepoint'] = triggerSavepoint;
    }
    public get triggerSavepoint(): boolean | undefined {
        return this['trigger_savepoint'];
    }
    public withJobIds(jobIds: Array<number>): StopFlinkJobsRequestBody {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<number>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<number> | undefined {
        return this['job_ids'];
    }
}