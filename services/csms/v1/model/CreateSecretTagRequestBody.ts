import { TagItem } from './TagItem';


export class CreateSecretTagRequestBody {
    public tag?: TagItem;
    public constructor() { 
    }
    public withTag(tag: TagItem): CreateSecretTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}