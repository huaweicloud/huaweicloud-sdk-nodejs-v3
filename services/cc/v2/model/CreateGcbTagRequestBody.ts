import { RequiredTag } from './RequiredTag';


export class CreateGcbTagRequestBody {
    public tag?: RequiredTag;
    public constructor(tag?: RequiredTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: RequiredTag): CreateGcbTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}