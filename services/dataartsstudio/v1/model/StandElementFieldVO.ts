

export class StandElementFieldVO {
    private 'fd_name'?: string;
    public description?: string;
    public id?: number;
    public actived?: boolean;
    public required?: boolean;
    public searchable?: boolean;
    private 'displayed_name'?: string;
    private 'displayed_name_en'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'create_by'?: string;
    private 'update_by'?: string;
    public constructor(fdName?: string, actived?: boolean) { 
        this['fd_name'] = fdName;
        this['actived'] = actived;
    }
    public withFdName(fdName: string): StandElementFieldVO {
        this['fd_name'] = fdName;
        return this;
    }
    public set fdName(fdName: string  | undefined) {
        this['fd_name'] = fdName;
    }
    public get fdName(): string | undefined {
        return this['fd_name'];
    }
    public withDescription(description: string): StandElementFieldVO {
        this['description'] = description;
        return this;
    }
    public withId(id: number): StandElementFieldVO {
        this['id'] = id;
        return this;
    }
    public withActived(actived: boolean): StandElementFieldVO {
        this['actived'] = actived;
        return this;
    }
    public withRequired(required: boolean): StandElementFieldVO {
        this['required'] = required;
        return this;
    }
    public withSearchable(searchable: boolean): StandElementFieldVO {
        this['searchable'] = searchable;
        return this;
    }
    public withDisplayedName(displayedName: string): StandElementFieldVO {
        this['displayed_name'] = displayedName;
        return this;
    }
    public set displayedName(displayedName: string  | undefined) {
        this['displayed_name'] = displayedName;
    }
    public get displayedName(): string | undefined {
        return this['displayed_name'];
    }
    public withDisplayedNameEn(displayedNameEn: string): StandElementFieldVO {
        this['displayed_name_en'] = displayedNameEn;
        return this;
    }
    public set displayedNameEn(displayedNameEn: string  | undefined) {
        this['displayed_name_en'] = displayedNameEn;
    }
    public get displayedNameEn(): string | undefined {
        return this['displayed_name_en'];
    }
    public withCreateTime(createTime: Date): StandElementFieldVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): StandElementFieldVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateBy(createBy: string): StandElementFieldVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): StandElementFieldVO {
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