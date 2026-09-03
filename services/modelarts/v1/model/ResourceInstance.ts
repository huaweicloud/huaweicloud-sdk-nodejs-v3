import { TmsTagResp } from './TmsTagResp';


export class ResourceInstance {
    private 'resource_detail'?: object;
    private 'workspace_id'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<TmsTagResp>;
    public constructor() { 
    }
    public withResourceDetail(resourceDetail: object): ResourceInstance {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withWorkspaceId(workspaceId: string): ResourceInstance {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withResourceId(resourceId: string): ResourceInstance {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceInstance {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<TmsTagResp>): ResourceInstance {
        this['tags'] = tags;
        return this;
    }
}