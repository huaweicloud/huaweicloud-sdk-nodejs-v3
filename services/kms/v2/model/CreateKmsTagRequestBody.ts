import { TagItem } from './TagItem';


export class CreateKmsTagRequestBody {
    public tag?: TagItem;
    public sequence?: string;
    public constructor() { 
    }
    public withTag(tag: TagItem): CreateKmsTagRequestBody {
        this['tag'] = tag;
        return this;
    }
    public withSequence(sequence: string): CreateKmsTagRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}