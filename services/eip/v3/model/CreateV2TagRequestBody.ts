import { CreateV2TagRequestBodyTag } from './CreateV2TagRequestBodyTag';


export class CreateV2TagRequestBody {
    public tag?: CreateV2TagRequestBodyTag;
    public constructor(tag?: CreateV2TagRequestBodyTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: CreateV2TagRequestBodyTag): CreateV2TagRequestBody {
        this['tag'] = tag;
        return this;
    }
}