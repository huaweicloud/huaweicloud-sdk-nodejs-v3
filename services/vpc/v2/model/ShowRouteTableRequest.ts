

export class ShowRouteTableRequest {
    private 'routetable_id': string | undefined;
    public constructor(routetableId?: any) { 
        this['routetable_id'] = routetableId;
    }
    public withRoutetableId(routetableId: string): ShowRouteTableRequest {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId() {
        return this['routetable_id'];
    }
}