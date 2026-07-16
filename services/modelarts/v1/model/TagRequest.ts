import { TmsTag } from './TmsTag';


export class TagRequest {
    public tags?: Array<TmsTag>;
    public constructor(tags?: Array<TmsTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TmsTag>): TagRequest {
        this['tags'] = tags;
        return this;
    }
}