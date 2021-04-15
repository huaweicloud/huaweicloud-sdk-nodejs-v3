import { ResourceTag } from './ResourceTag';


export class AddImageTagRequestBody {
    public tag: ResourceTag;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTag): AddImageTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}