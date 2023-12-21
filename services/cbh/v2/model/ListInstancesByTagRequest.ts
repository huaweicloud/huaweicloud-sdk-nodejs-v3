import { ListCBHByTagsRequestBody } from './ListCBHByTagsRequestBody';


export class ListInstancesByTagRequest {
    public limit?: string;
    public offset?: string;
    public body?: ListCBHByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: string): ListInstancesByTagRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListInstancesByTagRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListCBHByTagsRequestBody): ListInstancesByTagRequest {
        this['body'] = body;
        return this;
    }
}