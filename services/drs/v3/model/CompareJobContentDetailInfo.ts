

export class CompareJobContentDetailInfo {
    private 'source_key_value'?: Array<string>;
    private 'target_key_value'?: Array<string>;
    private 'select_sql'?: string;
    private 'target_select_sql'?: string;
    public constructor() { 
    }
    public withSourceKeyValue(sourceKeyValue: Array<string>): CompareJobContentDetailInfo {
        this['source_key_value'] = sourceKeyValue;
        return this;
    }
    public set sourceKeyValue(sourceKeyValue: Array<string>  | undefined) {
        this['source_key_value'] = sourceKeyValue;
    }
    public get sourceKeyValue(): Array<string> | undefined {
        return this['source_key_value'];
    }
    public withTargetKeyValue(targetKeyValue: Array<string>): CompareJobContentDetailInfo {
        this['target_key_value'] = targetKeyValue;
        return this;
    }
    public set targetKeyValue(targetKeyValue: Array<string>  | undefined) {
        this['target_key_value'] = targetKeyValue;
    }
    public get targetKeyValue(): Array<string> | undefined {
        return this['target_key_value'];
    }
    public withSelectSql(selectSql: string): CompareJobContentDetailInfo {
        this['select_sql'] = selectSql;
        return this;
    }
    public set selectSql(selectSql: string  | undefined) {
        this['select_sql'] = selectSql;
    }
    public get selectSql(): string | undefined {
        return this['select_sql'];
    }
    public withTargetSelectSql(targetSelectSql: string): CompareJobContentDetailInfo {
        this['target_select_sql'] = targetSelectSql;
        return this;
    }
    public set targetSelectSql(targetSelectSql: string  | undefined) {
        this['target_select_sql'] = targetSelectSql;
    }
    public get targetSelectSql(): string | undefined {
        return this['target_select_sql'];
    }
}