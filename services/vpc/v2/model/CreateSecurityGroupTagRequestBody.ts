import { ResourceTag } from './ResourceTag';


export class CreateSecurityGroupTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateSecurityGroupTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}