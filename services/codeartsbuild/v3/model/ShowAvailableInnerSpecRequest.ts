

export class ShowAvailableInnerSpecRequest {
    private 'project_id'?: string;
    public arch?: string;
    public constructor(projectId?: string, arch?: string) { 
        this['project_id'] = projectId;
        this['arch'] = arch;
    }
    public withProjectId(projectId: string): ShowAvailableInnerSpecRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withArch(arch: string): ShowAvailableInnerSpecRequest {
        this['arch'] = arch;
        return this;
    }
}