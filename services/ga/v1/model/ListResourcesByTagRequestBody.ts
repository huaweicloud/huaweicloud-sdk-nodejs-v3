import { Match } from './Match';
import { Tag } from './Tag';


export class ListResourcesByTagRequestBody {
    public tags?: Array<Tag>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withTags(tags: Array<Tag>): ListResourcesByTagRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<Match>): ListResourcesByTagRequestBody {
        this['matches'] = matches;
        return this;
    }
}