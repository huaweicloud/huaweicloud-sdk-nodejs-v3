

export class IsapResourceDisplaySettingColumns {
    private 'column_alias'?: string;
    private 'column_name'?: string;
    private 'display_by_default'?: boolean;
    public constructor() { 
    }
    public withColumnAlias(columnAlias: string): IsapResourceDisplaySettingColumns {
        this['column_alias'] = columnAlias;
        return this;
    }
    public set columnAlias(columnAlias: string  | undefined) {
        this['column_alias'] = columnAlias;
    }
    public get columnAlias(): string | undefined {
        return this['column_alias'];
    }
    public withColumnName(columnName: string): IsapResourceDisplaySettingColumns {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withDisplayByDefault(displayByDefault: boolean): IsapResourceDisplaySettingColumns {
        this['display_by_default'] = displayByDefault;
        return this;
    }
    public set displayByDefault(displayByDefault: boolean  | undefined) {
        this['display_by_default'] = displayByDefault;
    }
    public get displayByDefault(): boolean | undefined {
        return this['display_by_default'];
    }
}