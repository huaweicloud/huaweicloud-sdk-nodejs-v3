import { ResourceTag } from './ResourceTag';


export class AddImageTagRequestBody {
    public tag?: ResourceTag;
    public constructor(tag?: ResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): AddImageTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}