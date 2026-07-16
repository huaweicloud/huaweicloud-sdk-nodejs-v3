import { TagRequest } from './TagRequest';


export class DeleteHyperinstanceTagsRequest {
    public id?: string;
    public body?: TagRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteHyperinstanceTagsRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: TagRequest): DeleteHyperinstanceTagsRequest {
        this['body'] = body;
        return this;
    }
}