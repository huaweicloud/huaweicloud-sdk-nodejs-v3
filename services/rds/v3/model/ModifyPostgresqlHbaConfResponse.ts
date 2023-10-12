
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyPostgresqlHbaConfResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ModifyPostgresqlHbaConfResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ModifyPostgresqlHbaConfResponse {
        this['message'] = message;
        return this;
    }
}