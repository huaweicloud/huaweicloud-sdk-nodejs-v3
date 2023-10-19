
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConnectivityTestResponse extends SdkResponse {
    public result?: CreateConnectivityTestResponseResultEnum | string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateConnectivityTestResponseResultEnum | string): CreateConnectivityTestResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConnectivityTestResponseResultEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
