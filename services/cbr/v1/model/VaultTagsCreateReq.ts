import { Tag } from './Tag';


export class VaultTagsCreateReq {
    public tag?: Tag;
    public constructor() { 
    }
    public withTag(tag: Tag): VaultTagsCreateReq {
        this['tag'] = tag;
        return this;
    }
}