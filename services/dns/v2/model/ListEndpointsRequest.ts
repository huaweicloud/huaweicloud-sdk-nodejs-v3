

export class ListEndpointsRequest {
    public direction?: string;
    private 'vpc_id'?: string;
    public name?: string;
    public limit?: number;
    public offset?: number;
    public constructor(direction?: string) { 
        this['direction'] = direction;
    }
    public withDirection(direction: string): ListEndpointsRequest {
        this['direction'] = direction;
        return this;
    }
    public withVpcId(vpcId: string): ListEndpointsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withName(name: string): ListEndpointsRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListEndpointsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEndpointsRequest {
        this['offset'] = offset;
        return this;
    }
}