import { ResourceTag } from './ResourceTag';


export class CreateSubnetTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateSubnetTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}