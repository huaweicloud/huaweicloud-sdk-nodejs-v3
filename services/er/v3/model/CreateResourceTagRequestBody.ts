import { Tag } from './Tag';


export class CreateResourceTagRequestBody {
    public tag?: Tag;
    public constructor(tag?: Tag) { 
        this['tag'] = tag;
    }
    public withTag(tag: Tag): CreateResourceTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}