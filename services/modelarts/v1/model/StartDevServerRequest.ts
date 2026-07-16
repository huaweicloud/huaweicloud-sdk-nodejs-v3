import { ServerStartRequest } from './ServerStartRequest';


export class StartDevServerRequest {
    public id?: string;
    public body?: ServerStartRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): StartDevServerRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ServerStartRequest): StartDevServerRequest {
        this['body'] = body;
        return this;
    }
}