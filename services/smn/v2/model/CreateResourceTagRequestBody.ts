import { ResourceTag } from './ResourceTag';


export class CreateResourceTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateResourceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}