import { ResourceTag } from './ResourceTag';


export class ResourceTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): ResourceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}