import { Tag } from './Tag';


export class CreateTagReq {
    public tag: Tag;
    public constructor(tag?: any) { 
        this['tag'] = tag;
    }
    public withTag(tag: Tag): CreateTagReq {
        this['tag'] = tag;
        return this;
    }
}