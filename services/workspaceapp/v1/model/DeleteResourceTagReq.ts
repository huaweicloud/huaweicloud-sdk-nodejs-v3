import { TmsTag } from './TmsTag';


export class DeleteResourceTagReq {
    public tags?: Array<TmsTag>;
    public constructor() { 
    }
    public withTags(tags: Array<TmsTag>): DeleteResourceTagReq {
        this['tags'] = tags;
        return this;
    }
}