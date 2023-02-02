import { ListKeysRequestBody } from './ListKeysRequestBody';


export class ListKeysRequest {
    public body?: ListKeysRequestBody;
    public constructor() { 
    }
    public withBody(body: ListKeysRequestBody): ListKeysRequest {
        this['body'] = body;
        return this;
    }
}