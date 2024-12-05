import { UpdateGdgwRoutetableRequestBody } from './UpdateGdgwRoutetableRequestBody';


export class UpdateGdgwRouteTableRequest {
    private 'gdgw_id'?: string;
    public body?: UpdateGdgwRoutetableRequestBody;
    public constructor(gdgwId?: string) { 
        this['gdgw_id'] = gdgwId;
    }
    public withGdgwId(gdgwId: string): UpdateGdgwRouteTableRequest {
        this['gdgw_id'] = gdgwId;
        return this;
    }
    public set gdgwId(gdgwId: string  | undefined) {
        this['gdgw_id'] = gdgwId;
    }
    public get gdgwId(): string | undefined {
        return this['gdgw_id'];
    }
    public withBody(body: UpdateGdgwRoutetableRequestBody): UpdateGdgwRouteTableRequest {
        this['body'] = body;
        return this;
    }
}