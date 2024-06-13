import { ResourceTag } from './ResourceTag';


export class CreateFirewallTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateFirewallTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}