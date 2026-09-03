

export class ShowFactoryDependInstancesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'instance_id'?: number;
    public relation?: string;
    public depth?: number;
    public latest?: boolean;
    public constructor(workspace?: string, instanceId?: number) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): ShowFactoryDependInstancesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowFactoryDependInstancesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ShowFactoryDependInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: number): ShowFactoryDependInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withRelation(relation: string): ShowFactoryDependInstancesRequest {
        this['relation'] = relation;
        return this;
    }
    public withDepth(depth: number): ShowFactoryDependInstancesRequest {
        this['depth'] = depth;
        return this;
    }
    public withLatest(latest: boolean): ShowFactoryDependInstancesRequest {
        this['latest'] = latest;
        return this;
    }
}