import { ListTag } from './ListTag';


export class ListSubNetworkInterfacesByTagsRequestBody {
    public tags?: Array<ListTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ListTag>): ListSubNetworkInterfacesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}