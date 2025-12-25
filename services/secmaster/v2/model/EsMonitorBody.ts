

export class EsMonitorBody {
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'dataspace_id'?: string;
    private 'pipe_id'?: string;
    private 'storage_bytes'?: number;
    private 'storage_count'?: number;
    public constructor() { 
    }
    public withDomainId(domainId: string): EsMonitorBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): EsMonitorBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): EsMonitorBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataspaceId(dataspaceId: string): EsMonitorBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeId(pipeId: string): EsMonitorBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withStorageBytes(storageBytes: number): EsMonitorBody {
        this['storage_bytes'] = storageBytes;
        return this;
    }
    public set storageBytes(storageBytes: number  | undefined) {
        this['storage_bytes'] = storageBytes;
    }
    public get storageBytes(): number | undefined {
        return this['storage_bytes'];
    }
    public withStorageCount(storageCount: number): EsMonitorBody {
        this['storage_count'] = storageCount;
        return this;
    }
    public set storageCount(storageCount: number  | undefined) {
        this['storage_count'] = storageCount;
    }
    public get storageCount(): number | undefined {
        return this['storage_count'];
    }
}