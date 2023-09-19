import { CreateNetworkInstanceRequestBody } from './CreateNetworkInstanceRequestBody';


export class CreateNetworkInstanceRequest {
    public body?: CreateNetworkInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateNetworkInstanceRequestBody): CreateNetworkInstanceRequest {
        this['body'] = body;
        return this;
    }
}