import { Tag } from './Tag';


export class TagReq {
    public tag?: Tag;
    public constructor(tag?: Tag) { 
        this['tag'] = tag;
    }
    public withTag(tag: Tag): TagReq {
        this['tag'] = tag;
        return this;
    }
}