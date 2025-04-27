

export class ListEndpointVpcsRequest {
    public limit?: number;
    public offset?: number;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListEndpointVpcsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEndpointVpcsRequest {
        this['offset'] = offset;
        return this;
    }
    public withVpcId(vpcId: string): ListEndpointVpcsRequest {
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