

export class ListClouddcnSubnetsRequest {
    public limit?: number;
    public marker?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListClouddcnSubnetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListClouddcnSubnetsRequest {
        this['marker'] = marker;
        return this;
    }
    public withVpcId(vpcId: string): ListClouddcnSubnetsRequest {
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