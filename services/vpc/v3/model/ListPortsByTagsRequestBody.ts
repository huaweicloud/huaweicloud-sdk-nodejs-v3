import { ListTag } from './ListTag';
import { Match } from './Match';


export class ListPortsByTagsRequestBody {
    public matches?: Array<Match>;
    public tags?: Array<ListTag>;
    public constructor() { 
    }
    public withMatches(matches: Array<Match>): ListPortsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ListTag>): ListPortsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}