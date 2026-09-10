import { ResourceTag } from './ResourceTag';


export class CreateSubNetworkInterfaceTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateSubNetworkInterfaceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}