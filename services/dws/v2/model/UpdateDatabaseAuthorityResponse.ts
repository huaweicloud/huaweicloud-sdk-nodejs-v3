
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDatabaseAuthorityResponse extends SdkResponse {
    private 'view_sql'?: Array<string>;
    public constructor() { 
        super();
    }
    public withViewSql(viewSql: Array<string>): UpdateDatabaseAuthorityResponse {
        this['view_sql'] = viewSql;
        return this;
    }
    public set viewSql(viewSql: Array<string>  | undefined) {
        this['view_sql'] = viewSql;
    }
    public get viewSql(): Array<string> | undefined {
        return this['view_sql'];
    }
}