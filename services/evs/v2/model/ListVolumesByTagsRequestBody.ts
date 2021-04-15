import { Match } from './Match';
import { TagsForListVolumes } from './TagsForListVolumes';


export class ListVolumesByTagsRequestBody {
    public action: ListVolumesByTagsRequestBodyActionEnum;
    public limit?: number;
    public matches?: Array<Match>;
    public offset?: number;
    public tags: Array<TagsForListVolumes>;
    public constructor(action?: any, tags?: any) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: ListVolumesByTagsRequestBodyActionEnum): ListVolumesByTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withLimit(limit: number): ListVolumesByTagsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withMatches(matches: Array<Match>): ListVolumesByTagsRequestBody {
        this['matches'] = matches;
        return this;
    }
    public withOffset(offset: number): ListVolumesByTagsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: Array<TagsForListVolumes>): ListVolumesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVolumesByTagsRequestBodyActionEnum {
    FILTER = 'filter'
}
