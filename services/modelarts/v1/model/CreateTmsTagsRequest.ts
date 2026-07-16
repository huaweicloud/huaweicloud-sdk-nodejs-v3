import { TmsTag } from './TmsTag';


export class CreateTmsTagsRequest {
    public tags?: Array<TmsTag>;
    public constructor(tags?: Array<TmsTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TmsTag>): CreateTmsTagsRequest {
        this['tags'] = tags;
        return this;
    }
}