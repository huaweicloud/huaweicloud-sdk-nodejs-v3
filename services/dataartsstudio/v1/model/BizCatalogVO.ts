

export class BizCatalogVO {
    public name?: string;
    public description?: string;
    public guid?: string;
    public owner?: string;
    private 'parent_id'?: string;
    private 'prev_id'?: string;
    private 'next_id'?: string;
    public id?: string;
    private 'qualified_id'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'bizmetric_num'?: number;
    private 'children_num'?: number;
    public children?: Array<BizCatalogVO>;
    public constructor(name?: string, owner?: string, id?: string) { 
        this['name'] = name;
        this['owner'] = owner;
        this['id'] = id;
    }
    public withName(name: string): BizCatalogVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BizCatalogVO {
        this['description'] = description;
        return this;
    }
    public withGuid(guid: string): BizCatalogVO {
        this['guid'] = guid;
        return this;
    }
    public withOwner(owner: string): BizCatalogVO {
        this['owner'] = owner;
        return this;
    }
    public withParentId(parentId: string): BizCatalogVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withPrevId(prevId: string): BizCatalogVO {
        this['prev_id'] = prevId;
        return this;
    }
    public set prevId(prevId: string  | undefined) {
        this['prev_id'] = prevId;
    }
    public get prevId(): string | undefined {
        return this['prev_id'];
    }
    public withNextId(nextId: string): BizCatalogVO {
        this['next_id'] = nextId;
        return this;
    }
    public set nextId(nextId: string  | undefined) {
        this['next_id'] = nextId;
    }
    public get nextId(): string | undefined {
        return this['next_id'];
    }
    public withId(id: string): BizCatalogVO {
        this['id'] = id;
        return this;
    }
    public withQualifiedId(qualifiedId: string): BizCatalogVO {
        this['qualified_id'] = qualifiedId;
        return this;
    }
    public set qualifiedId(qualifiedId: string  | undefined) {
        this['qualified_id'] = qualifiedId;
    }
    public get qualifiedId(): string | undefined {
        return this['qualified_id'];
    }
    public withCreateBy(createBy: string): BizCatalogVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): BizCatalogVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): BizCatalogVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): BizCatalogVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withBizmetricNum(bizmetricNum: number): BizCatalogVO {
        this['bizmetric_num'] = bizmetricNum;
        return this;
    }
    public set bizmetricNum(bizmetricNum: number  | undefined) {
        this['bizmetric_num'] = bizmetricNum;
    }
    public get bizmetricNum(): number | undefined {
        return this['bizmetric_num'];
    }
    public withChildrenNum(childrenNum: number): BizCatalogVO {
        this['children_num'] = childrenNum;
        return this;
    }
    public set childrenNum(childrenNum: number  | undefined) {
        this['children_num'] = childrenNum;
    }
    public get childrenNum(): number | undefined {
        return this['children_num'];
    }
    public withChildren(children: Array<BizCatalogVO>): BizCatalogVO {
        this['children'] = children;
        return this;
    }
}