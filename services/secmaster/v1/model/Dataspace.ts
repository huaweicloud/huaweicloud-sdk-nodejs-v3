

export class Dataspace {
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'dataspace_type'?: DataspaceDataspaceTypeEnum | string;
    public description?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor(createBy?: string, createTime?: number, dataspaceId?: string, dataspaceName?: string, description?: string, domainId?: string, projectId?: string, regionId?: string, updateBy?: string, updateTime?: number) { 
        this['create_by'] = createBy;
        this['create_time'] = createTime;
        this['dataspace_id'] = dataspaceId;
        this['dataspace_name'] = dataspaceName;
        this['description'] = description;
        this['domain_id'] = domainId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['update_by'] = updateBy;
        this['update_time'] = updateTime;
    }
    public withCreateBy(createBy: string): Dataspace {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): Dataspace {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDataspaceId(dataspaceId: string): Dataspace {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): Dataspace {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDataspaceType(dataspaceType: DataspaceDataspaceTypeEnum | string): Dataspace {
        this['dataspace_type'] = dataspaceType;
        return this;
    }
    public set dataspaceType(dataspaceType: DataspaceDataspaceTypeEnum | string  | undefined) {
        this['dataspace_type'] = dataspaceType;
    }
    public get dataspaceType(): DataspaceDataspaceTypeEnum | string | undefined {
        return this['dataspace_type'];
    }
    public withDescription(description: string): Dataspace {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): Dataspace {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): Dataspace {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): Dataspace {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withUpdateBy(updateBy: string): Dataspace {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): Dataspace {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataspaceDataspaceTypeEnum {
    SYSTEM_DEFINED = 'system-defined',
    USER_DEFINED = 'user-defined'
}
