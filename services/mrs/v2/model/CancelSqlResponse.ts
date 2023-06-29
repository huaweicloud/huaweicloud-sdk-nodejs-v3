
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelSqlResponse extends SdkResponse {
    public message?: string;
    public status?: CancelSqlResponseStatusEnum;
    public constructor() { 
        super();
    }
    public withMessage(message: string): CancelSqlResponse {
        this['message'] = message;
        return this;
    }
    public withStatus(status: CancelSqlResponseStatusEnum): CancelSqlResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CancelSqlResponseStatusEnum {
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
