

export class ColumnInfo {
    private 'column_name'?: string;
    private 'data_type'?: string;
    private 'character_set_name'?: string;
    private 'primary_key'?: boolean;
    public constructor() { 
    }
    public withColumnName(columnName: string): ColumnInfo {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withDataType(dataType: string): ColumnInfo {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withCharacterSetName(characterSetName: string): ColumnInfo {
        this['character_set_name'] = characterSetName;
        return this;
    }
    public set characterSetName(characterSetName: string  | undefined) {
        this['character_set_name'] = characterSetName;
    }
    public get characterSetName(): string | undefined {
        return this['character_set_name'];
    }
    public withPrimaryKey(primaryKey: boolean): ColumnInfo {
        this['primary_key'] = primaryKey;
        return this;
    }
    public set primaryKey(primaryKey: boolean  | undefined) {
        this['primary_key'] = primaryKey;
    }
    public get primaryKey(): boolean | undefined {
        return this['primary_key'];
    }
}