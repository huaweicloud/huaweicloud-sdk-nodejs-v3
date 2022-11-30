import { ListServersByTagRequestBody } from './ListServersByTagRequestBody';


export class ListServersByTagRequest {
    public body?: ListServersByTagRequestBody;
    public constructor() { 
    }
    public withBody(body: ListServersByTagRequestBody): ListServersByTagRequest {
        this['body'] = body;
        return this;
    }
}