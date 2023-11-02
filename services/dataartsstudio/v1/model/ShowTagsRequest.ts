import { TagRequest } from './TagRequest';


export class ShowTagsRequest {
    public instance?: string;
    public body?: TagRequest;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): ShowTagsRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: TagRequest): ShowTagsRequest {
        this['body'] = body;
        return this;
    }
}