

export class ListSubnetsRequest {
    public limit?: number;
    public marker?: string;
    private 'vpc_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListSubnetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSubnetsRequest {
        this['marker'] = marker;
        return this;
    }
    public withVpcId(vpcId: string): ListSubnetsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
}