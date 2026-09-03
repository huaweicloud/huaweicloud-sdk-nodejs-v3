import { CountResourceInstancesReqMatches } from './CountResourceInstancesReqMatches';
import { CountResourceInstancesReqTags } from './CountResourceInstancesReqTags';


export class CountResourceInstancesReq {
    public tags?: Array<CountResourceInstancesReqTags>;
    public matches?: Array<CountResourceInstancesReqMatches>;
    private 'workspace_id'?: string;
    private 'without_any_tag'?: boolean;
    public constructor() { 
    }
    public withTags(tags: Array<CountResourceInstancesReqTags>): CountResourceInstancesReq {
        this['tags'] = tags;
        return this;
    }
    public withMatches(matches: Array<CountResourceInstancesReqMatches>): CountResourceInstancesReq {
        this['matches'] = matches;
        return this;
    }
    public withWorkspaceId(workspaceId: string): CountResourceInstancesReq {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): CountResourceInstancesReq {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
}