import { NeutronCreateRouterRequestBody } from './NeutronCreateRouterRequestBody';


export class NeutronCreateRouterRequest {
    public body?: NeutronCreateRouterRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateRouterRequestBody): NeutronCreateRouterRequest {
        this['body'] = body;
        return this;
    }
}