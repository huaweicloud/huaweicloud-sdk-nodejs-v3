import { ListSharesByTagRequestBody } from './ListSharesByTagRequestBody';


export class ListSharesByTagRequest {
    public body?: ListSharesByTagRequestBody;
    public constructor() { 
    }
    public withBody(body: ListSharesByTagRequestBody): ListSharesByTagRequest {
        this['body'] = body;
        return this;
    }
}