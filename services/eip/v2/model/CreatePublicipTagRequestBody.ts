import { ResourceTagOption } from './ResourceTagOption';


export class CreatePublicipTagRequestBody {
    public tag?: ResourceTagOption;
    public constructor(tag?: ResourceTagOption) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTagOption): CreatePublicipTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}