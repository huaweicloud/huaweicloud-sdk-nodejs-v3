import { ComponentUpdateRequest } from './ComponentUpdateRequest';


export class UpdateApplicationComponentRequest {
    public id?: string;
    public body?: ComponentUpdateRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateApplicationComponentRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ComponentUpdateRequest): UpdateApplicationComponentRequest {
        this['body'] = body;
        return this;
    }
}