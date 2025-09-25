
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityDataCategoryResponse extends SdkResponse {
    private 'category_id'?: string;
    private 'category_name'?: string;
    public description?: string;
    private 'category_level'?: number;
    private 'root_id'?: string;
    private 'parent_id'?: string;
    private 'category_path'?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withCategoryId(categoryId: string): CreateSecurityDataCategoryResponse {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withCategoryName(categoryName: string): CreateSecurityDataCategoryResponse {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
    public withDescription(description: string): CreateSecurityDataCategoryResponse {
        this['description'] = description;
        return this;
    }
    public withCategoryLevel(categoryLevel: number): CreateSecurityDataCategoryResponse {
        this['category_level'] = categoryLevel;
        return this;
    }
    public set categoryLevel(categoryLevel: number  | undefined) {
        this['category_level'] = categoryLevel;
    }
    public get categoryLevel(): number | undefined {
        return this['category_level'];
    }
    public withRootId(rootId: string): CreateSecurityDataCategoryResponse {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withParentId(parentId: string): CreateSecurityDataCategoryResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withCategoryPath(categoryPath: string): CreateSecurityDataCategoryResponse {
        this['category_path'] = categoryPath;
        return this;
    }
    public set categoryPath(categoryPath: string  | undefined) {
        this['category_path'] = categoryPath;
    }
    public get categoryPath(): string | undefined {
        return this['category_path'];
    }
    public withCreateBy(createBy: string): CreateSecurityDataCategoryResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): CreateSecurityDataCategoryResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): CreateSecurityDataCategoryResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): CreateSecurityDataCategoryResponse {
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