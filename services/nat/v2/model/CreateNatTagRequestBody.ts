import { TagBody } from './TagBody';


export class CreateNatTagRequestBody {
    public tag?: TagBody;
    public constructor(tag?: TagBody) { 
        this['tag'] = tag;
    }
    public withTag(tag: TagBody): CreateNatTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}