

export class BatchModifySlowProcessThresholdRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'slow_process_threshold'?: number;
    public constructor(instanceIds?: Array<string>, slowProcessThreshold?: number) { 
        this['instance_ids'] = instanceIds;
        this['slow_process_threshold'] = slowProcessThreshold;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchModifySlowProcessThresholdRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withSlowProcessThreshold(slowProcessThreshold: number): BatchModifySlowProcessThresholdRequestBody {
        this['slow_process_threshold'] = slowProcessThreshold;
        return this;
    }
    public set slowProcessThreshold(slowProcessThreshold: number  | undefined) {
        this['slow_process_threshold'] = slowProcessThreshold;
    }
    public get slowProcessThreshold(): number | undefined {
        return this['slow_process_threshold'];
    }
}