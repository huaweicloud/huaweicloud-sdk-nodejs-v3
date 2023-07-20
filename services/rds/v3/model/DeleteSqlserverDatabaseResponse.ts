
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteSqlserverDatabaseResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): DeleteSqlserverDatabaseResponse {
        this['resp'] = resp;
        return this;
    }
}