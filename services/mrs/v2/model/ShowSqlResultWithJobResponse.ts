
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlResultWithJobResponse extends SdkResponse {
    private 'sql_results'?: object;
    public constructor() { 
        super();
    }
    public withSqlResults(sqlResults: object): ShowSqlResultWithJobResponse {
        this['sql_results'] = sqlResults;
        return this;
    }
    public set sqlResults(sqlResults: object  | undefined) {
        this['sql_results'] = sqlResults;
    }
    public get sqlResults(): object | undefined {
        return this['sql_results'];
    }
}