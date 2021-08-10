import { CreateRoutetableReqBody } from './CreateRoutetableReqBody';


export class CreateRouteTableRequest {
    public body?: CreateRoutetableReqBody;
    public constructor() { 
    }
    public withBody(body: CreateRoutetableReqBody): CreateRouteTableRequest {
        this['body'] = body;
        return this;
    }
}