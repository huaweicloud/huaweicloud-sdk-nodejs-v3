import { ListTag } from './ListTag';
import { Match } from './Match';


export class CountPortsByTagsRequestBody {
    public matches?: Array<Match>;
    public tags?: Array<ListTag>;
    public constructor() { 
    }
    public withMatches(matches: Array<Match>): CountPortsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ListTag>): CountPortsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}