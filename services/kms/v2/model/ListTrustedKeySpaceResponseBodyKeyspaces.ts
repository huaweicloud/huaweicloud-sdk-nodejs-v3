

export class ListTrustedKeySpaceResponseBodyKeyspaces {
    private 'keyspace_id'?: string;
    private 'keyspace_name'?: string;
    private 'enterprise_project_id'?: string;
    public type?: number;
    public state?: number;
    public description?: string;
    private 'created_by'?: string;
    private 'create_time'?: string;
    private 'last_modify_time'?: string;
    public constructor(keyspaceId?: string, keyspaceName?: string, type?: number, state?: number, createdBy?: string, createTime?: string, lastModifyTime?: string) { 
        this['keyspace_id'] = keyspaceId;
        this['keyspace_name'] = keyspaceName;
        this['type'] = type;
        this['state'] = state;
        this['created_by'] = createdBy;
        this['create_time'] = createTime;
        this['last_modify_time'] = lastModifyTime;
    }
    public withKeyspaceId(keyspaceId: string): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withKeyspaceName(keyspaceName: string): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['keyspace_name'] = keyspaceName;
        return this;
    }
    public set keyspaceName(keyspaceName: string  | undefined) {
        this['keyspace_name'] = keyspaceName;
    }
    public get keyspaceName(): string | undefined {
        return this['keyspace_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: number): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['type'] = type;
        return this;
    }
    public withState(state: number): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['state'] = state;
        return this;
    }
    public withDescription(description: string): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['description'] = description;
        return this;
    }
    public withCreatedBy(createdBy: string): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreateTime(createTime: string): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastModifyTime(lastModifyTime: string): ListTrustedKeySpaceResponseBodyKeyspaces {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: string  | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime(): string | undefined {
        return this['last_modify_time'];
    }
}