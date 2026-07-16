import { TmsTag } from './TmsTag';


export class DeleteTmsTagsRequest {
    public tags?: Array<TmsTag>;
    public constructor(tags?: Array<TmsTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TmsTag>): DeleteTmsTagsRequest {
        this['tags'] = tags;
        return this;
    }
}