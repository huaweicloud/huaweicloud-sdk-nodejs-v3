

export class CompareTableInfoWithToken {
    private 'table_name'?: string;
    private 'min_token'?: string;
    private 'max_token'?: string;
    public constructor(tableName?: string) { 
        this['table_name'] = tableName;
    }
    public withTableName(tableName: string): CompareTableInfoWithToken {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withMinToken(minToken: string): CompareTableInfoWithToken {
        this['min_token'] = minToken;
        return this;
    }
    public set minToken(minToken: string  | undefined) {
        this['min_token'] = minToken;
    }
    public get minToken(): string | undefined {
        return this['min_token'];
    }
    public withMaxToken(maxToken: string): CompareTableInfoWithToken {
        this['max_token'] = maxToken;
        return this;
    }
    public set maxToken(maxToken: string  | undefined) {
        this['max_token'] = maxToken;
    }
    public get maxToken(): string | undefined {
        return this['max_token'];
    }
}