import { GroupUpdateRequest } from './GroupUpdateRequest';


export class UpdateApplicationGroupRequest {
    public id?: string;
    public body?: GroupUpdateRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateApplicationGroupRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: GroupUpdateRequest): UpdateApplicationGroupRequest {
        this['body'] = body;
        return this;
    }
}