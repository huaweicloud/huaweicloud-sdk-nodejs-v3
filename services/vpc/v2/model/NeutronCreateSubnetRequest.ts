import { NeutronCreateSubnetRequestBody } from './NeutronCreateSubnetRequestBody';


export class NeutronCreateSubnetRequest {
    public body?: NeutronCreateSubnetRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateSubnetRequestBody): NeutronCreateSubnetRequest {
        this['body'] = body;
        return this;
    }
}