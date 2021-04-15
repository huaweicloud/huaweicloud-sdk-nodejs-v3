import { ResourceTag } from './ResourceTag';


export class CreateSubnetTagRequestBody {
    public tag: ResourceTag;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): CreateSubnetTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}