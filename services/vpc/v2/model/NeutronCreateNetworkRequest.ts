import { NeutronCreateNetworkRequestBody } from './NeutronCreateNetworkRequestBody';


export class NeutronCreateNetworkRequest {
    public body?: NeutronCreateNetworkRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateNetworkRequestBody): NeutronCreateNetworkRequest {
        this['body'] = body;
        return this;
    }
}