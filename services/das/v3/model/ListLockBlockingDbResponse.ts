
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLockBlockingDbResponse extends SdkResponse {
    private 'db_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withDbList(dbList: Array<string>): ListLockBlockingDbResponse {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: Array<string>  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): Array<string> | undefined {
        return this['db_list'];
    }
}