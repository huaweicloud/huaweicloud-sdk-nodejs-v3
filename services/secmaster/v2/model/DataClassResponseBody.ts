

export class DataClassResponseBody {
    public id?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'cloud_pack_version'?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'domain_id'?: string;
    public name?: string;
    private 'business_code'?: string;
    public description?: string;
    private 'is_built_in'?: boolean;
    private 'parent_id'?: string;
    private 'type_num'?: number;
    public constructor() { 
    }
    public withId(id: string): DataClassResponseBody {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): DataClassResponseBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): DataClassResponseBody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreatorId(creatorId: string): DataClassResponseBody {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): DataClassResponseBody {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierId(modifierId: string): DataClassResponseBody {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): DataClassResponseBody {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withCloudPackVersion(cloudPackVersion: string): DataClassResponseBody {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withRegionId(regionId: string): DataClassResponseBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): DataClassResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): DataClassResponseBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDomainId(domainId: string): DataClassResponseBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): DataClassResponseBody {
        this['name'] = name;
        return this;
    }
    public withBusinessCode(businessCode: string): DataClassResponseBody {
        this['business_code'] = businessCode;
        return this;
    }
    public set businessCode(businessCode: string  | undefined) {
        this['business_code'] = businessCode;
    }
    public get businessCode(): string | undefined {
        return this['business_code'];
    }
    public withDescription(description: string): DataClassResponseBody {
        this['description'] = description;
        return this;
    }
    public withIsBuiltIn(isBuiltIn: boolean): DataClassResponseBody {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withParentId(parentId: string): DataClassResponseBody {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withTypeNum(typeNum: number): DataClassResponseBody {
        this['type_num'] = typeNum;
        return this;
    }
    public set typeNum(typeNum: number  | undefined) {
        this['type_num'] = typeNum;
    }
    public get typeNum(): number | undefined {
        return this['type_num'];
    }
}