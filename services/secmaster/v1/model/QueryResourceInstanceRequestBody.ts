import { Match } from './Match';
import { WorkspaceTag } from './WorkspaceTag';


export class QueryResourceInstanceRequestBody {
    private 'without_any_tag'?: boolean;
    public tags?: Array<WorkspaceTag>;
    private 'sys_tags'?: Array<WorkspaceTag>;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): QueryResourceInstanceRequestBody {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withTags(tags: Array<WorkspaceTag>): QueryResourceInstanceRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<WorkspaceTag>): QueryResourceInstanceRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<WorkspaceTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<WorkspaceTag> | undefined {
        return this['sys_tags'];
    }
    public withMatches(matches: Array<Match>): QueryResourceInstanceRequestBody {
        this['matches'] = matches;
        return this;
    }
}