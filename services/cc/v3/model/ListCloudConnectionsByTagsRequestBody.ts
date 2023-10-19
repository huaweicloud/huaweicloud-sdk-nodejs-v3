import { MultivaluedTag } from './MultivaluedTag';


export class ListCloudConnectionsByTagsRequestBody {
    public tags?: Array<MultivaluedTag>;
    public constructor(tags?: Array<MultivaluedTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<MultivaluedTag>): ListCloudConnectionsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}