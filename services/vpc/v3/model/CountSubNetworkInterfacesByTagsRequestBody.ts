import { ListTag } from './ListTag';


export class CountSubNetworkInterfacesByTagsRequestBody {
    public tags?: Array<ListTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ListTag>): CountSubNetworkInterfacesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}