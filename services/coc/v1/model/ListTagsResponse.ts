import { ScriptTag } from './ScriptTag';


export class ListTagsResponse {
    public tags?: Array<ScriptTag>;
    public total?: number;
    public constructor() { 
    }
    public withTags(tags: Array<ScriptTag>): ListTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotal(total: number): ListTagsResponse {
        this['total'] = total;
        return this;
    }
}