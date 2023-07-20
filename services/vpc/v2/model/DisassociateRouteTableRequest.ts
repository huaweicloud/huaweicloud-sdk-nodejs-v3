import { RoutetableAssociateReqbody } from './RoutetableAssociateReqbody';


export class DisassociateRouteTableRequest {
    private 'routetable_id'?: string;
    public body?: RoutetableAssociateReqbody;
    public constructor(routetableId?: string) { 
        this['routetable_id'] = routetableId;
    }
    public withRoutetableId(routetableId: string): DisassociateRouteTableRequest {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string  | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId(): string | undefined {
        return this['routetable_id'];
    }
    public withBody(body: RoutetableAssociateReqbody): DisassociateRouteTableRequest {
        this['body'] = body;
        return this;
    }
}