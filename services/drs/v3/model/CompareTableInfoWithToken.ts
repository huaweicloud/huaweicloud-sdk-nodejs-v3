

export class CompareTableInfoWithToken {
    private 'table_name': string | undefined;
    private 'min_token'?: string | undefined;
    private 'max_token'?: string | undefined;
    public constructor(tableName?: any) { 
        this['table_name'] = tableName;
    }
    public withTableName(tableName: string): CompareTableInfoWithToken {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName() {
        return this['table_name'];
    }
    public withMinToken(minToken: string): CompareTableInfoWithToken {
        this['min_token'] = minToken;
        return this;
    }
    public set minToken(minToken: string | undefined) {
        this['min_token'] = minToken;
    }
    public get minToken() {
        return this['min_token'];
    }
    public withMaxToken(maxToken: string): CompareTableInfoWithToken {
        this['max_token'] = maxToken;
        return this;
    }
    public set maxToken(maxToken: string | undefined) {
        this['max_token'] = maxToken;
    }
    public get maxToken() {
        return this['max_token'];
    }
}