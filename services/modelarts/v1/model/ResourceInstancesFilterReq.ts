import { Match } from './Match';
import { MutiValueTag } from './MutiValueTag';


export class ResourceInstancesFilterReq {
    private 'workspace_id'?: string;
    public tags?: Array<MutiValueTag>;
    private 'without_any_tag'?: boolean;
    public matches?: Array<Match>;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ResourceInstancesFilterReq {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTags(tags: Array<MutiValueTag>): ResourceInstancesFilterReq {
        this['tags'] = tags;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ResourceInstancesFilterReq {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withMatches(matches: Array<Match>): ResourceInstancesFilterReq {
        this['matches'] = matches;
        return this;
    }
}