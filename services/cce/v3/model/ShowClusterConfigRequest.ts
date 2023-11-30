

export class ShowClusterConfigRequest {
    public type?: ShowClusterConfigRequestTypeEnum | string;
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withType(type: ShowClusterConfigRequestTypeEnum | string): ShowClusterConfigRequest {
        this['type'] = type;
        return this;
    }
    public withClusterId(clusterId: string): ShowClusterConfigRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): ShowClusterConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowClusterConfigRequestTypeEnum {
    CONTROL = 'control',
    AUDIT = 'audit',
    SYSTEM_ADDON = 'system-addon'
}
