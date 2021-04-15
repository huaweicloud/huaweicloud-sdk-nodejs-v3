import { CreateVpcRouteRequestBody } from './CreateVpcRouteRequestBody';


export class CreateVpcRouteRequest {
    public body?: CreateVpcRouteRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVpcRouteRequestBody): CreateVpcRouteRequest {
        this['body'] = body;
        return this;
    }
}