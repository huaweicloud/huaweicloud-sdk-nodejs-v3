import { Tag } from './Tag';


export class CreateResourceTagRequestBody {
    public tag: Tag;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: Tag): CreateResourceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}