
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteFormatSqlResponse extends SdkResponse {
    private 'format_sql'?: string;
    public constructor() { 
        super();
    }
    public withFormatSql(formatSql: string): ExecuteFormatSqlResponse {
        this['format_sql'] = formatSql;
        return this;
    }
    public set formatSql(formatSql: string  | undefined) {
        this['format_sql'] = formatSql;
    }
    public get formatSql(): string | undefined {
        return this['format_sql'];
    }
}