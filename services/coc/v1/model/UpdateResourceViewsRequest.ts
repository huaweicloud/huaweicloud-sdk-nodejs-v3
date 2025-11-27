import { UpdateResourceViewsRequestBody } from './UpdateResourceViewsRequestBody';


export class UpdateResourceViewsRequest {
    public id?: string;
    public body?: UpdateResourceViewsRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateResourceViewsRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateResourceViewsRequestBody): UpdateResourceViewsRequest {
        this['body'] = body;
        return this;
    }
}