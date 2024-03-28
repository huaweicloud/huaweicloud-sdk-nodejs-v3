import { MultivaluedTag } from './MultivaluedTag';


export class ListCentralNetworksByTagsRequestBody {
    public tags?: Array<MultivaluedTag>;
    public constructor(tags?: Array<MultivaluedTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<MultivaluedTag>): ListCentralNetworksByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}