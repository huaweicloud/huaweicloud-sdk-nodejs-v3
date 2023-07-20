import { ResourceTag } from './ResourceTag';


export class CreateVpcResourceTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateVpcResourceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}