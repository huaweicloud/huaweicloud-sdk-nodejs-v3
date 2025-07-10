import { CreateShareCacheGroupsRequstBody } from './CreateShareCacheGroupsRequstBody';


export class CreateShareCacheGroupsRequest {
    public body?: CreateShareCacheGroupsRequstBody;
    public constructor() { 
    }
    public withBody(body: CreateShareCacheGroupsRequstBody): CreateShareCacheGroupsRequest {
        this['body'] = body;
        return this;
    }
}