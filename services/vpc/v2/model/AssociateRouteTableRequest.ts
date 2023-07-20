import { RoutetableAssociateReqbody } from './RoutetableAssociateReqbody';


export class AssociateRouteTableRequest {
    private 'routetable_id'?: string;
    public body?: RoutetableAssociateReqbody;
    public constructor(routetableId?: string) { 
        this['routetable_id'] = routetableId;
    }
    public withRoutetableId(routetableId: string): AssociateRouteTableRequest {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string  | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId(): string | undefined {
        return this['routetable_id'];
    }
    public withBody(body: RoutetableAssociateReqbody): AssociateRouteTableRequest {
        this['body'] = body;
        return this;
    }
}