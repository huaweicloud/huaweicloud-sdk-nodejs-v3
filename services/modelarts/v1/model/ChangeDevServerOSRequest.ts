import { ServerOsRequest } from './ServerOsRequest';


export class ChangeDevServerOSRequest {
    public id?: string;
    public body?: ServerOsRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ChangeDevServerOSRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ServerOsRequest): ChangeDevServerOSRequest {
        this['body'] = body;
        return this;
    }
}