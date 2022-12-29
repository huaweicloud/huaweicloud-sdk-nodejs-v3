import { ResourceTag } from './ResourceTag';


export class CreateLoadbalancerTagsRequestBody {
    public tag: ResourceTag;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateLoadbalancerTagsRequestBody {
        this['tag'] = tag;
        return this;
    }
}