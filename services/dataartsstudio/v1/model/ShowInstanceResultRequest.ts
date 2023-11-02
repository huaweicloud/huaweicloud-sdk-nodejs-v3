

export class ShowInstanceResultRequest {
    private 'instance_id'?: string;
    public workspace?: string;
    public constructor(instanceId?: string, workspace?: string) { 
        this['instance_id'] = instanceId;
        this['workspace'] = workspace;
    }
    public withInstanceId(instanceId: string): ShowInstanceResultRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkspace(workspace: string): ShowInstanceResultRequest {
        this['workspace'] = workspace;
        return this;
    }
}