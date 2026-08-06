

export class ListAccessPointResponseBodyAccessPoints {
    private 'access_point_id'?: string;
    private 'keyspace_id'?: string;
    private 'access_point_name'?: string;
    public state?: number;
    public type?: number;
    private 'created_by'?: string;
    private 'create_time'?: string;
    private 'lsat_modify_time'?: string;
    public constructor(accessPointId?: string, keyspaceId?: string, accessPointName?: string, state?: number, type?: number, createdBy?: string, createTime?: string, lsatModifyTime?: string) { 
        this['access_point_id'] = accessPointId;
        this['keyspace_id'] = keyspaceId;
        this['access_point_name'] = accessPointName;
        this['state'] = state;
        this['type'] = type;
        this['created_by'] = createdBy;
        this['create_time'] = createTime;
        this['lsat_modify_time'] = lsatModifyTime;
    }
    public withAccessPointId(accessPointId: string): ListAccessPointResponseBodyAccessPoints {
        this['access_point_id'] = accessPointId;
        return this;
    }
    public set accessPointId(accessPointId: string  | undefined) {
        this['access_point_id'] = accessPointId;
    }
    public get accessPointId(): string | undefined {
        return this['access_point_id'];
    }
    public withKeyspaceId(keyspaceId: string): ListAccessPointResponseBodyAccessPoints {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withAccessPointName(accessPointName: string): ListAccessPointResponseBodyAccessPoints {
        this['access_point_name'] = accessPointName;
        return this;
    }
    public set accessPointName(accessPointName: string  | undefined) {
        this['access_point_name'] = accessPointName;
    }
    public get accessPointName(): string | undefined {
        return this['access_point_name'];
    }
    public withState(state: number): ListAccessPointResponseBodyAccessPoints {
        this['state'] = state;
        return this;
    }
    public withType(type: number): ListAccessPointResponseBodyAccessPoints {
        this['type'] = type;
        return this;
    }
    public withCreatedBy(createdBy: string): ListAccessPointResponseBodyAccessPoints {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreateTime(createTime: string): ListAccessPointResponseBodyAccessPoints {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLsatModifyTime(lsatModifyTime: string): ListAccessPointResponseBodyAccessPoints {
        this['lsat_modify_time'] = lsatModifyTime;
        return this;
    }
    public set lsatModifyTime(lsatModifyTime: string  | undefined) {
        this['lsat_modify_time'] = lsatModifyTime;
    }
    public get lsatModifyTime(): string | undefined {
        return this['lsat_modify_time'];
    }
}