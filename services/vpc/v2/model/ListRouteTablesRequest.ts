

export class ListRouteTablesRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    private 'vpc_id'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListRouteTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRouteTablesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListRouteTablesRequest {
        this['id'] = id;
        return this;
    }
    public withVpcId(vpcId: string): ListRouteTablesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListRouteTablesRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
}