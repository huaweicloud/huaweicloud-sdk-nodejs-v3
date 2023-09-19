import { Tag } from './Tag';


export class CreateTagRequestBody {
    public tag?: Tag;
    public constructor() { 
    }
    public withTag(tag: Tag): CreateTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}