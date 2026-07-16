import { TagRequest } from './TagRequest';


export class CreateHyperinstanceTagsRequest {
    public id?: string;
    public body?: TagRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): CreateHyperinstanceTagsRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: TagRequest): CreateHyperinstanceTagsRequest {
        this['body'] = body;
        return this;
    }
}