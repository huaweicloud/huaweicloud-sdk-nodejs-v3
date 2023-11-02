

export class DirectoryVO {
    public name?: string;
    public description?: string;
    public type?: DirectoryVOTypeEnum | string;
    public id?: number;
    private 'parent_id'?: number;
    private 'prev_id'?: number;
    private 'root_id'?: number;
    private 'qualified_name'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'create_by'?: string;
    private 'update_by'?: string;
    public children?: Array<DirectoryVO>;
    public constructor(name?: string, type?: string, parentId?: number, prevId?: number) { 
        this['name'] = name;
        this['type'] = type;
        this['parent_id'] = parentId;
        this['prev_id'] = prevId;
    }
    public withName(name: string): DirectoryVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DirectoryVO {
        this['description'] = description;
        return this;
    }
    public withType(type: DirectoryVOTypeEnum | string): DirectoryVO {
        this['type'] = type;
        return this;
    }
    public withId(id: number): DirectoryVO {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: number): DirectoryVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withPrevId(prevId: number): DirectoryVO {
        this['prev_id'] = prevId;
        return this;
    }
    public set prevId(prevId: number  | undefined) {
        this['prev_id'] = prevId;
    }
    public get prevId(): number | undefined {
        return this['prev_id'];
    }
    public withRootId(rootId: number): DirectoryVO {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: number  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): number | undefined {
        return this['root_id'];
    }
    public withQualifiedName(qualifiedName: string): DirectoryVO {
        this['qualified_name'] = qualifiedName;
        return this;
    }
    public set qualifiedName(qualifiedName: string  | undefined) {
        this['qualified_name'] = qualifiedName;
    }
    public get qualifiedName(): string | undefined {
        return this['qualified_name'];
    }
    public withCreateTime(createTime: Date): DirectoryVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): DirectoryVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateBy(createBy: string): DirectoryVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): DirectoryVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withChildren(children: Array<DirectoryVO>): DirectoryVO {
        this['children'] = children;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DirectoryVOTypeEnum {
    STANDARD_ELEMENT = 'STANDARD_ELEMENT',
    TAG = 'TAG',
    CODE = 'CODE'
}
