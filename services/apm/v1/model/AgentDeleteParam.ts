

export class AgentDeleteParam {
    private 'instance_list'?: Array<number>;
    public region?: string;
    private 'business_id'?: number;
    public constructor(instanceList?: Array<number>, region?: string, businessId?: number) { 
        this['instance_list'] = instanceList;
        this['region'] = region;
        this['business_id'] = businessId;
    }
    public withInstanceList(instanceList: Array<number>): AgentDeleteParam {
        this['instance_list'] = instanceList;
        return this;
    }
    public set instanceList(instanceList: Array<number>  | undefined) {
        this['instance_list'] = instanceList;
    }
    public get instanceList(): Array<number> | undefined {
        return this['instance_list'];
    }
    public withRegion(region: string): AgentDeleteParam {
        this['region'] = region;
        return this;
    }
    public withBusinessId(businessId: number): AgentDeleteParam {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
}