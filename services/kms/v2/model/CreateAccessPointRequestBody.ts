

export class CreateAccessPointRequestBody {
    private 'keyspace_id'?: string;
    private 'access_point_name'?: string;
    public type?: CreateAccessPointRequestBodyTypeEnum | number;
    public identity?: string;
    private 'cluster_id'?: string;
    public description?: string;
    public constructor(keyspaceId?: string, accessPointName?: string, type?: number) { 
        this['keyspace_id'] = keyspaceId;
        this['access_point_name'] = accessPointName;
        this['type'] = type;
    }
    public withKeyspaceId(keyspaceId: string): CreateAccessPointRequestBody {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withAccessPointName(accessPointName: string): CreateAccessPointRequestBody {
        this['access_point_name'] = accessPointName;
        return this;
    }
    public set accessPointName(accessPointName: string  | undefined) {
        this['access_point_name'] = accessPointName;
    }
    public get accessPointName(): string | undefined {
        return this['access_point_name'];
    }
    public withType(type: CreateAccessPointRequestBodyTypeEnum | number): CreateAccessPointRequestBody {
        this['type'] = type;
        return this;
    }
    public withIdentity(identity: string): CreateAccessPointRequestBody {
        this['identity'] = identity;
        return this;
    }
    public withClusterId(clusterId: string): CreateAccessPointRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDescription(description: string): CreateAccessPointRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAccessPointRequestBodyTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
