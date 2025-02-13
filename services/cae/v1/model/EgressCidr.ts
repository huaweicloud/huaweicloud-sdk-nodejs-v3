

export class EgressCidr {
    public cidr?: string;
    private 'route_table_id'?: string;
    public id?: string;
    public constructor(cidr?: string, routeTableId?: string) { 
        this['cidr'] = cidr;
        this['route_table_id'] = routeTableId;
    }
    public withCidr(cidr: string): EgressCidr {
        this['cidr'] = cidr;
        return this;
    }
    public withRouteTableId(routeTableId: string): EgressCidr {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string  | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId(): string | undefined {
        return this['route_table_id'];
    }
    public withId(id: string): EgressCidr {
        this['id'] = id;
        return this;
    }
}