import { ReqListDehByTags } from './ReqListDehByTags';


export class ListDedicatedHostsByTagsRequest {
    public body?: ReqListDehByTags;
    public constructor() { 
    }
    public withBody(body: ReqListDehByTags): ListDedicatedHostsByTagsRequest {
        this['body'] = body;
        return this;
    }
}