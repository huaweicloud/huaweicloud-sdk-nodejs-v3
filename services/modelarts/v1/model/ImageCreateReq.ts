

export class ImageCreateReq {
    public description?: string;
    public name?: string;
    public namespace?: string;
    public tag?: string;
    private 'workspace_id'?: string;
    private 'swr_instance_id'?: string;
    private 'swr_instance_domain'?: string;
    public constructor(name?: string, namespace?: string) { 
        this['name'] = name;
        this['namespace'] = namespace;
    }
    public withDescription(description: string): ImageCreateReq {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ImageCreateReq {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ImageCreateReq {
        this['namespace'] = namespace;
        return this;
    }
    public withTag(tag: string): ImageCreateReq {
        this['tag'] = tag;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ImageCreateReq {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSwrInstanceId(swrInstanceId: string): ImageCreateReq {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withSwrInstanceDomain(swrInstanceDomain: string): ImageCreateReq {
        this['swr_instance_domain'] = swrInstanceDomain;
        return this;
    }
    public set swrInstanceDomain(swrInstanceDomain: string  | undefined) {
        this['swr_instance_domain'] = swrInstanceDomain;
    }
    public get swrInstanceDomain(): string | undefined {
        return this['swr_instance_domain'];
    }
}