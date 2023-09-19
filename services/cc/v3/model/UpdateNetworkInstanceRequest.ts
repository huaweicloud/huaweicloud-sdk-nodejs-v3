import { UpdateNetworkInstanceRequestBody } from './UpdateNetworkInstanceRequestBody';


export class UpdateNetworkInstanceRequest {
    public id?: string;
    public body?: UpdateNetworkInstanceRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateNetworkInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateNetworkInstanceRequestBody): UpdateNetworkInstanceRequest {
        this['body'] = body;
        return this;
    }
}