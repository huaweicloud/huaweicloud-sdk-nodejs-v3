import { ResourceTag } from './ResourceTag';


export class CreateLoadbalancerTagsRequestBody {
    public tag?: ResourceTag;
    public constructor() { 
    }
    public withTag(tag: ResourceTag): CreateLoadbalancerTagsRequestBody {
        this['tag'] = tag;
        return this;
    }
}