
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlResultWithJobResponse extends SdkResponse {
    private 'sql_results'?: object | undefined;
    public constructor() { 
        super();
    }
    public withSqlResults(sqlResults: object): ShowSqlResultWithJobResponse {
        this['sql_results'] = sqlResults;
        return this;
    }
    public set sqlResults(sqlResults: object | undefined) {
        this['sql_results'] = sqlResults;
    }
    public get sqlResults() {
        return this['sql_results'];
    }
}