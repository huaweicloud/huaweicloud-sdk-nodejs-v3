

export class ColumnMapping {
    private 'column_name': string | undefined;
    private 'json_key': string | undefined;
    public constructor(columnName: any, jsonKey: any) { 
        this['column_name'] = columnName;
        this['json_key'] = jsonKey;
    }
    public withColumnName(columnName: string): ColumnMapping {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName() {
        return this['column_name'];
    }
    public withJsonKey(jsonKey: string): ColumnMapping {
        this['json_key'] = jsonKey;
        return this;
    }
    public set jsonKey(jsonKey: string | undefined) {
        this['json_key'] = jsonKey;
    }
    public get jsonKey() {
        return this['json_key'];
    }
}