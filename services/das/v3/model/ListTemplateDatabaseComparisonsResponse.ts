
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateDatabaseComparisonsResponse extends SdkResponse {
    private 'db_name_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withDbNameList(dbNameList: Array<string>): ListTemplateDatabaseComparisonsResponse {
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