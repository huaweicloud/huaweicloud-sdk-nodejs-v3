

export class IsapTableColumnDisplaySettingDto {
    private 'column_name'?: string;
    private 'column_alias'?: string;
    private 'column_alias_en'?: string;
    private 'display_by_default'?: boolean;
    public constructor() { 
    }
    public withColumnName(columnName: string): IsapTableColumnDisplaySettingDto {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnAlias(columnAlias: string): IsapTableColumnDisplaySettingDto {
        this['column_alias'] = columnAlias;
        return this;
    }
    public set columnAlias(columnAlias: string  | undefined) {
        this['column_alias'] = columnAlias;
    }
    public get columnAlias(): string | undefined {
        return this['column_alias'];
    }
    public withColumnAliasEn(columnAliasEn: string): IsapTableColumnDisplaySettingDto {
        this['column_alias_en'] = columnAliasEn;
        return this;
    }
    public set columnAliasEn(columnAliasEn: string  | undefined) {
        this['column_alias_en'] = columnAliasEn;
    }
    public get columnAliasEn(): string | undefined {
        return this['column_alias_en'];
    }
    public withDisplayByDefault(displayByDefault: boolean): IsapTableColumnDisplaySettingDto {
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