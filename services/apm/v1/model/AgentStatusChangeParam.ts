

export class AgentStatusChangeParam {
    private 'instance_list'?: Array<number>;
    private 'target_status'?: number;
    public region?: string;
    private 'env_id'?: number;
    public constructor(instanceList?: Array<number>, targetStatus?: number, region?: string) { 
        this['instance_list'] = instanceList;
        this['target_status'] = targetStatus;
        this['region'] = region;
    }
    public withInstanceList(instanceList: Array<number>): AgentStatusChangeParam {
        this['instance_list'] = instanceList;
        return this;
    }
    public set instanceList(instanceList: Array<number>  | undefined) {
        this['instance_list'] = instanceList;
    }
    public get instanceList(): Array<number> | undefined {
        return this['instance_list'];
    }
    public withTargetStatus(targetStatus: number): AgentStatusChangeParam {
        this['target_status'] = targetStatus;
        return this;
    }
    public set targetStatus(targetStatus: number  | undefined) {
        this['target_status'] = targetStatus;
    }
    public get targetStatus(): number | undefined {
        return this['target_status'];
    }
    public withRegion(region: string): AgentStatusChangeParam {
        this['region'] = region;
        return this;
    }
    public withEnvId(envId: number): AgentStatusChangeParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
}