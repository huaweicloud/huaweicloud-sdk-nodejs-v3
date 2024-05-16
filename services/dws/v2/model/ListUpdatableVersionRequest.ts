

export class ListUpdatableVersionRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: ListUpdatableVersionRequestTypeEnum | string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListUpdatableVersionRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListUpdatableVersionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUpdatableVersionRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ListUpdatableVersionRequestTypeEnum | string): ListUpdatableVersionRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUpdatableVersionRequestTypeEnum {
    CLUSTER = 'cluster',
    HOTPATCH = 'hotpatch'
}
