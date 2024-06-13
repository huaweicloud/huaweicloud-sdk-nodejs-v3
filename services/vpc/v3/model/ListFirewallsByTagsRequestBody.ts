import { ListTag } from './ListTag';
import { Match } from './Match';


export class ListFirewallsByTagsRequestBody {
    public matches?: Array<Match>;
    public tags?: Array<ListTag>;
    public constructor() { 
    }
    public withMatches(matches: Array<Match>): ListFirewallsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ListTag>): ListFirewallsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}