import { ServerOsRequest } from './ServerOsRequest';


export class ReinstallDevServerOSRequest {
    public id?: string;
    public body?: ServerOsRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ReinstallDevServerOSRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ServerOsRequest): ReinstallDevServerOSRequest {
        this['body'] = body;
        return this;
    }
}