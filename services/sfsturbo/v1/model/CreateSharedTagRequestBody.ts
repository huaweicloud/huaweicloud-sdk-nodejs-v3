import { ResourceTag } from './ResourceTag';


export class CreateSharedTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateSharedTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}