

export class ListResolverQueryLogConfigsRequest {
    public limit?: number;
    public marker?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListResolverQueryLogConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResolverQueryLogConfigsRequest {
        this['marker'] = marker;
        return this;
    }
    public withVpcId(vpcId: string): ListResolverQueryLogConfigsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}