import { HierarchiesAttrVO } from './HierarchiesAttrVO';


export class DimensionHierarchiesVO {
    public id?: number;
    public name?: string;
    public attrs?: Array<HierarchiesAttrVO>;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'create_by'?: string;
    private 'update_by'?: string;
    public constructor() { 
    }
    public withId(id: number): DimensionHierarchiesVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DimensionHierarchiesVO {
        this['name'] = name;
        return this;
    }
    public withAttrs(attrs: Array<HierarchiesAttrVO>): DimensionHierarchiesVO {
        this['attrs'] = attrs;
        return this;
    }
    public withCreateTime(createTime: Date): DimensionHierarchiesVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): DimensionHierarchiesVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateBy(createBy: string): DimensionHierarchiesVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): DimensionHierarchiesVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
}