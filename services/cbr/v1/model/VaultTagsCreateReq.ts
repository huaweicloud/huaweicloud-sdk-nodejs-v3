import { TagCreate } from './TagCreate';


export class VaultTagsCreateReq {
    public tag?: TagCreate;
    public constructor(tag?: TagCreate) { 
        this['tag'] = tag;
    }
    public withTag(tag: TagCreate): VaultTagsCreateReq {
        this['tag'] = tag;
        return this;
    }
}