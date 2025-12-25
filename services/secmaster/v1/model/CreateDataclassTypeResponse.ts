
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataclassTypeResponse extends SdkResponse {
    public id?: string;
    private 'dataclass_id'?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'region_id'?: string;
    private 'layout_id'?: string;
    private 'layout_name'?: string;
    public category?: string;
    private 'category_code'?: string;
    private 'sub_category'?: string;
    private 'sub_category_code'?: string;
    public description?: string;
    public enabled?: boolean;
    public level?: number;
    private 'is_built_in'?: boolean;
    public sla?: number;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'dataclass_business_code'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateDataclassTypeResponse {
        this['id'] = id;
        return this;
    }
    public withDataclassId(dataclassId: string): CreateDataclassTypeResponse {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDomainId(domainId: string): CreateDataclassTypeResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): CreateDataclassTypeResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): CreateDataclassTypeResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withRegionId(regionId: string): CreateDataclassTypeResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withLayoutId(layoutId: string): CreateDataclassTypeResponse {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withLayoutName(layoutName: string): CreateDataclassTypeResponse {
        this['layout_name'] = layoutName;
        return this;
    }
    public set layoutName(layoutName: string  | undefined) {
        this['layout_name'] = layoutName;
    }
    public get layoutName(): string | undefined {
        return this['layout_name'];
    }
    public withCategory(category: string): CreateDataclassTypeResponse {
        this['category'] = category;
        return this;
    }
    public withCategoryCode(categoryCode: string): CreateDataclassTypeResponse {
        this['category_code'] = categoryCode;
        return this;
    }
    public set categoryCode(categoryCode: string  | undefined) {
        this['category_code'] = categoryCode;
    }
    public get categoryCode(): string | undefined {
        return this['category_code'];
    }
    public withSubCategory(subCategory: string): CreateDataclassTypeResponse {
        this['sub_category'] = subCategory;
        return this;
    }
    public set subCategory(subCategory: string  | undefined) {
        this['sub_category'] = subCategory;
    }
    public get subCategory(): string | undefined {
        return this['sub_category'];
    }
    public withSubCategoryCode(subCategoryCode: string): CreateDataclassTypeResponse {
        this['sub_category_code'] = subCategoryCode;
        return this;
    }
    public set subCategoryCode(subCategoryCode: string  | undefined) {
        this['sub_category_code'] = subCategoryCode;
    }
    public get subCategoryCode(): string | undefined {
        return this['sub_category_code'];
    }
    public withDescription(description: string): CreateDataclassTypeResponse {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): CreateDataclassTypeResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withLevel(level: number): CreateDataclassTypeResponse {
        this['level'] = level;
        return this;
    }
    public withIsBuiltIn(isBuiltIn: boolean): CreateDataclassTypeResponse {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withSla(sla: number): CreateDataclassTypeResponse {
        this['sla'] = sla;
        return this;
    }
    public withCreatorId(creatorId: string): CreateDataclassTypeResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): CreateDataclassTypeResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierId(modifierId: string): CreateDataclassTypeResponse {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): CreateDataclassTypeResponse {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withCreateTime(createTime: string): CreateDataclassTypeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateDataclassTypeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDataclassBusinessCode(dataclassBusinessCode: string): CreateDataclassTypeResponse {
        this['dataclass_business_code'] = dataclassBusinessCode;
        return this;
    }
    public set dataclassBusinessCode(dataclassBusinessCode: string  | undefined) {
        this['dataclass_business_code'] = dataclassBusinessCode;
    }
    public get dataclassBusinessCode(): string | undefined {
        return this['dataclass_business_code'];
    }
}