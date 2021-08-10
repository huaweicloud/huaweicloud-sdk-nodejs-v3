import { UpdateRoutetableReqBody } from './UpdateRoutetableReqBody';


export class UpdateRouteTableRequest {
    private 'routetable_id': string | undefined;
    public body?: UpdateRoutetableReqBody;
    public constructor(routetableId?: any) { 
        this['routetable_id'] = routetableId;
    }
    public withRoutetableId(routetableId: string): UpdateRouteTableRequest {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId() {
        return this['routetable_id'];
    }
    public withBody(body: UpdateRoutetableReqBody): UpdateRouteTableRequest {
        this['body'] = body;
        return this;
    }
}