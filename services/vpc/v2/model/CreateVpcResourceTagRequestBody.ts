import { ResourceTag } from './ResourceTag';


export class CreateVpcResourceTagRequestBody {
    public tag: ResourceTag;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateVpcResourceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}