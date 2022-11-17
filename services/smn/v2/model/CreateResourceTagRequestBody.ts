import { CreateResourceTagRequestBodyTag } from './CreateResourceTagRequestBodyTag';


export class CreateResourceTagRequestBody {
    public tag: CreateResourceTagRequestBodyTag;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: CreateResourceTagRequestBodyTag): CreateResourceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}