import { ResourceTag } from './ResourceTag';


export class CreatePortTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreatePortTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}