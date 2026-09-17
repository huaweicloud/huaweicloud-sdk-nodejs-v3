import { TagFilterRequestBody } from './TagFilterRequestBody';


export class ListResourceByTagRequest {
    public limit?: string;
    public offset?: string;
    public body?: TagFilterRequestBody;
    public constructor() { 
    }
    public withLimit(limit: string): ListResourceByTagRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourceByTagRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: TagFilterRequestBody): ListResourceByTagRequest {
        this['body'] = body;
        return this;
    }
}