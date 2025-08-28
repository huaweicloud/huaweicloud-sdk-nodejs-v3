

export class TopSlowLogTopSlowLogList {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'slow_log_num'?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): TopSlowLogTopSlowLogList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): TopSlowLogTopSlowLogList {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withSlowLogNum(slowLogNum: number): TopSlowLogTopSlowLogList {
        this['slow_log_num'] = slowLogNum;
        return this;
    }
    public set slowLogNum(slowLogNum: number  | undefined) {
        this['slow_log_num'] = slowLogNum;
    }
    public get slowLogNum(): number | undefined {
        return this['slow_log_num'];
    }
}