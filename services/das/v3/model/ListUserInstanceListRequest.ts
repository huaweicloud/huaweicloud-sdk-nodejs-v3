import { ListUserInstanceListRequestBody } from './ListUserInstanceListRequestBody';


export class ListUserInstanceListRequest {
    public body?: ListUserInstanceListRequestBody;
    public constructor() { 
    }
    public withBody(body: ListUserInstanceListRequestBody): ListUserInstanceListRequest {
        this['body'] = body;
        return this;
    }
}