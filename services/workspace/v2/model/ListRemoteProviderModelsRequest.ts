import { ListRemoteModelsReq } from './ListRemoteModelsReq';


export class ListRemoteProviderModelsRequest {
    public body?: ListRemoteModelsReq;
    public constructor() { 
    }
    public withBody(body: ListRemoteModelsReq): ListRemoteProviderModelsRequest {
        this['body'] = body;
        return this;
    }
}