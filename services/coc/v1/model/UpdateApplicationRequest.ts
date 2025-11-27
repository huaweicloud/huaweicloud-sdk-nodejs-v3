import { ApplicationUpdateRequest } from './ApplicationUpdateRequest';


export class UpdateApplicationRequest {
    public id?: string;
    public body?: ApplicationUpdateRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateApplicationRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ApplicationUpdateRequest): UpdateApplicationRequest {
        this['body'] = body;
        return this;
    }
}