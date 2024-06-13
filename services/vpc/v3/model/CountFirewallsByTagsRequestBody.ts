import { ListTag } from './ListTag';
import { Match } from './Match';


export class CountFirewallsByTagsRequestBody {
    public matches?: Array<Match>;
    public tags?: Array<ListTag>;
    public constructor() { 
    }
    public withMatches(matches: Array<Match>): CountFirewallsByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withTags(tags: Array<ListTag>): CountFirewallsByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}