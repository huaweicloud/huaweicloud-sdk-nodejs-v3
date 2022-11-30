import { ResourceTag } from './ResourceTag';


export class CreateListenerTagsRequestBody {
    public tag?: ResourceTag;
    public constructor() { 
    }
    public withTag(tag: ResourceTag): CreateListenerTagsRequestBody {
        this['tag'] = tag;
        return this;
    }
}