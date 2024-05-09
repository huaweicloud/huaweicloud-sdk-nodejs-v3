

export class ContentDiffDetailVO {
    private 'source_key_value'?: Array<string>;
    private 'target_key_value'?: Array<string>;
    private 'source_select_sql'?: string;
    private 'target_select_sql'?: string;
    public constructor() { 
    }
    public withSourceKeyValue(sourceKeyValue: Array<string>): ContentDiffDetailVO {
        this['source_key_value'] = sourceKeyValue;
        return this;
    }
    public set sourceKeyValue(sourceKeyValue: Array<string>  | undefined) {
        this['source_key_value'] = sourceKeyValue;
    }
    public get sourceKeyValue(): Array<string> | undefined {
        return this['source_key_value'];
    }
    public withTargetKeyValue(targetKeyValue: Array<string>): ContentDiffDetailVO {
        this['target_key_value'] = targetKeyValue;
        return this;
    }
    public set targetKeyValue(targetKeyValue: Array<string>  | undefined) {
        this['target_key_value'] = targetKeyValue;
    }
    public get targetKeyValue(): Array<string> | undefined {
        return this['target_key_value'];
    }
    public withSourceSelectSql(sourceSelectSql: string): ContentDiffDetailVO {
        this['source_select_sql'] = sourceSelectSql;
        return this;
    }
    public set sourceSelectSql(sourceSelectSql: string  | undefined) {
        this['source_select_sql'] = sourceSelectSql;
    }
    public get sourceSelectSql(): string | undefined {
        return this['source_select_sql'];
    }
    public withTargetSelectSql(targetSelectSql: string): ContentDiffDetailVO {
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