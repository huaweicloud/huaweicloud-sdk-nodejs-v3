
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlTemplateDatabasesResponse extends SdkResponse {
    private 'db_name_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withDbNameList(dbNameList: Array<string>): ListSqlTemplateDatabasesResponse {
        this['db_name_list'] = dbNameList;
        return this;
    }
    public set dbNameList(dbNameList: Array<string>  | undefined) {
        this['db_name_list'] = dbNameList;
    }
    public get dbNameList(): Array<string> | undefined {
        return this['db_name_list'];
    }
}