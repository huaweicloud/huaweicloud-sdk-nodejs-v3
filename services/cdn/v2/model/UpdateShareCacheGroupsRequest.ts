import { UpdateShareCacheGroupsRequstBody } from './UpdateShareCacheGroupsRequstBody';


export class UpdateShareCacheGroupsRequest {
    public id?: string;
    public body?: UpdateShareCacheGroupsRequstBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateShareCacheGroupsRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateShareCacheGroupsRequstBody): UpdateShareCacheGroupsRequest {
        this['body'] = body;
        return this;
    }
}