import { ServerOsRequest } from './ServerOsRequest';


export class ChangeHyperinstanceOSRequest {
    public id?: string;
    public body?: ServerOsRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ChangeHyperinstanceOSRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ServerOsRequest): ChangeHyperinstanceOSRequest {
        this['body'] = body;
        return this;
    }
}