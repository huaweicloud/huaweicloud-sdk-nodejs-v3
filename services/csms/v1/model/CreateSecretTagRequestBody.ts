import { TagItem } from './TagItem';


export class CreateSecretTagRequestBody {
    public tag?: TagItem;
    public constructor(tag?: TagItem) { 
        this['tag'] = tag;
    }
    public withTag(tag: TagItem): CreateSecretTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}