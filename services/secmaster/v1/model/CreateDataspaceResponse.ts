
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataspaceResponse extends SdkResponse {
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'dataspace_type'?: CreateDataspaceResponseDataspaceTypeEnum | string;
    public description?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withCreateBy(createBy: string): CreateDataspaceResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): CreateDataspaceResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDataspaceId(dataspaceId: string): CreateDataspaceResponse {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): CreateDataspaceResponse {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDataspaceType(dataspaceType: CreateDataspaceResponseDataspaceTypeEnum | string): CreateDataspaceResponse {
        this['dataspace_type'] = dataspaceType;
        return this;
    }
    public set dataspaceType(dataspaceType: CreateDataspaceResponseDataspaceTypeEnum | string  | undefined) {
        this['dataspace_type'] = dataspaceType;
    }
    public get dataspaceType(): CreateDataspaceResponseDataspaceTypeEnum | string | undefined {
        return this['dataspace_type'];
    }
    public withDescription(description: string): CreateDataspaceResponse {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): CreateDataspaceResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): CreateDataspaceResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): CreateDataspaceResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withUpdateBy(updateBy: string): CreateDataspaceResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): CreateDataspaceResponse {
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
export enum CreateDataspaceResponseDataspaceTypeEnum {
    SYSTEM_DEFINED = 'system-defined',
    USER_DEFINED = 'user-defined'
}
