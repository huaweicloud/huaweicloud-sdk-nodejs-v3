import { ResourceTagOption } from './ResourceTagOption';


export class CreatePublicipTagRequestBody {
    public tag: ResourceTagOption;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: ResourceTagOption): CreatePublicipTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}