

export class DeleteRouteTableRequest {
    private 'routetable_id'?: string;
    public constructor(routetableId?: string) { 
        this['routetable_id'] = routetableId;
    }
    public withRoutetableId(routetableId: string): DeleteRouteTableRequest {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string  | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId(): string | undefined {
        return this['routetable_id'];
    }
}