import { ResourceTag } from './ResourceTag';


export class CreateListenerTagsRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateListenerTagsRequestBody {
        this['tag'] = tag;
        return this;
    }
}