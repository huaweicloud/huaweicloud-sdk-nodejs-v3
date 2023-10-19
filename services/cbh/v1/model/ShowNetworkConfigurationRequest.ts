import { NetworkRequestBody } from './NetworkRequestBody';


export class ShowNetworkConfigurationRequest {
    public body?: NetworkRequestBody;
    public constructor() { 
    }
    public withBody(body: NetworkRequestBody): ShowNetworkConfigurationRequest {
        this['body'] = body;
        return this;
    }
}