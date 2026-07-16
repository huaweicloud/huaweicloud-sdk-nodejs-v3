import { ServerBindPublicIPRequest } from './ServerBindPublicIPRequest';


export class BindDevServerPublicIPRequest {
    public id?: string;
    public body?: ServerBindPublicIPRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): BindDevServerPublicIPRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ServerBindPublicIPRequest): BindDevServerPublicIPRequest {
        this['body'] = body;
        return this;
    }
}