

export class ResidualResources {
    private 'elb_listener_id'?: string;
    private 'elb_pool_id'?: string;
    private 'vpcep_id'?: string;
    public constructor() { 
    }
    public withElbListenerId(elbListenerId: string): ResidualResources {
        this['elb_listener_id'] = elbListenerId;
        return this;
    }
    public set elbListenerId(elbListenerId: string  | undefined) {
        this['elb_listener_id'] = elbListenerId;
    }
    public get elbListenerId(): string | undefined {
        return this['elb_listener_id'];
    }
    public withElbPoolId(elbPoolId: string): ResidualResources {
        this['elb_pool_id'] = elbPoolId;
        return this;
    }
    public set elbPoolId(elbPoolId: string  | undefined) {
        this['elb_pool_id'] = elbPoolId;
    }
    public get elbPoolId(): string | undefined {
        return this['elb_pool_id'];
    }
    public withVpcepId(vpcepId: string): ResidualResources {
        this['vpcep_id'] = vpcepId;
        return this;
    }
    public set vpcepId(vpcepId: string  | undefined) {
        this['vpcep_id'] = vpcepId;
    }
    public get vpcepId(): string | undefined {
        return this['vpcep_id'];
    }
}