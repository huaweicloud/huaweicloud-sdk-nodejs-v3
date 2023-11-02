import { BizCatalogVO } from './BizCatalogVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCatalogTreeResponse extends SdkResponse {
    public name?: string;
    public description?: string;
    public guid?: string;
    public owner?: string;
    private 'parent_id'?: number;
    private 'prev_id'?: number;
    private 'next_id'?: number;
    public id?: number;
    private 'qualified_id'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'bizmetric_num'?: number;
    private 'children_num'?: number;
    public children?: Array<BizCatalogVO>;
    public constructor() { 
        super();
    }
    public withName(name: string): ListCatalogTreeResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListCatalogTreeResponse {
        this['description'] = description;
        return this;
    }
    public withGuid(guid: string): ListCatalogTreeResponse {
        this['guid'] = guid;
        return this;
    }
    public withOwner(owner: string): ListCatalogTreeResponse {
        this['owner'] = owner;
        return this;
    }
    public withParentId(parentId: number): ListCatalogTreeResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withPrevId(prevId: number): ListCatalogTreeResponse {
        this['prev_id'] = prevId;
        return this;
    }
    public set prevId(prevId: number  | undefined) {
        this['prev_id'] = prevId;
    }
    public get prevId(): number | undefined {
        return this['prev_id'];
    }
    public withNextId(nextId: number): ListCatalogTreeResponse {
        this['next_id'] = nextId;
        return this;
    }
    public set nextId(nextId: number  | undefined) {
        this['next_id'] = nextId;
    }
    public get nextId(): number | undefined {
        return this['next_id'];
    }
    public withId(id: number): ListCatalogTreeResponse {
        this['id'] = id;
        return this;
    }
    public withQualifiedId(qualifiedId: string): ListCatalogTreeResponse {
        this['qualified_id'] = qualifiedId;
        return this;
    }
    public set qualifiedId(qualifiedId: string  | undefined) {
        this['qualified_id'] = qualifiedId;
    }
    public get qualifiedId(): string | undefined {
        return this['qualified_id'];
    }
    public withCreateBy(createBy: string): ListCatalogTreeResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): ListCatalogTreeResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): ListCatalogTreeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ListCatalogTreeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withBizmetricNum(bizmetricNum: number): ListCatalogTreeResponse {
        this['bizmetric_num'] = bizmetricNum;
        return this;
    }
    public set bizmetricNum(bizmetricNum: number  | undefined) {
        this['bizmetric_num'] = bizmetricNum;
    }
    public get bizmetricNum(): number | undefined {
        return this['bizmetric_num'];
    }
    public withChildrenNum(childrenNum: number): ListCatalogTreeResponse {
        this['children_num'] = childrenNum;
        return this;
    }
    public set childrenNum(childrenNum: number  | undefined) {
        this['children_num'] = childrenNum;
    }
    public get childrenNum(): number | undefined {
        return this['children_num'];
    }
    public withChildren(children: Array<BizCatalogVO>): ListCatalogTreeResponse {
        this['children'] = children;
        return this;
    }
}