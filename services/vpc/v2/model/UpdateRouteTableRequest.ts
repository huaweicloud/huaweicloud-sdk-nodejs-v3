import { UpdateRoutetableReqBody } from './UpdateRoutetableReqBody';


export class UpdateRouteTableRequest {
    private 'routetable_id'?: string;
    public body?: UpdateRoutetableReqBody;
    public constructor(routetableId?: string) { 
        this['routetable_id'] = routetableId;
    }
    public withRoutetableId(routetableId: string): UpdateRouteTableRequest {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string  | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId(): string | undefined {
        return this['routetable_id'];
    }
    public withBody(body: UpdateRoutetableReqBody): UpdateRouteTableRequest {
        this['body'] = body;
        return this;
    }
}