import { QueryResourceByTagRequestBody } from './QueryResourceByTagRequestBody';


export class ListGcbResourceByTagRequest {
    public limit?: number;
    public offset?: number;
    public body?: QueryResourceByTagRequestBody;
    public constructor() { 
    }
    public withLimit(limit: number): ListGcbResourceByTagRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGcbResourceByTagRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: QueryResourceByTagRequestBody): ListGcbResourceByTagRequest {
        this['body'] = body;
        return this;
    }
}