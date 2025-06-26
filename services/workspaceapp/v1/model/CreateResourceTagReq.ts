import { TmsTag } from './TmsTag';


export class CreateResourceTagReq {
    public tags?: Array<TmsTag>;
    public constructor() { 
    }
    public withTags(tags: Array<TmsTag>): CreateResourceTagReq {
        this['tags'] = tags;
        return this;
    }
}