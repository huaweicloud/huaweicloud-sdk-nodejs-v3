import { UpdateServerRequest } from './UpdateServerRequest';


export class UpdateDevServerRequest {
    public id?: string;
    public body?: UpdateServerRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateDevServerRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateServerRequest): UpdateDevServerRequest {
        this['body'] = body;
        return this;
    }
}