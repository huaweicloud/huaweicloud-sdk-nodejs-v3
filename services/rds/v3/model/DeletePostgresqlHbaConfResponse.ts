
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePostgresqlHbaConfResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeletePostgresqlHbaConfResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeletePostgresqlHbaConfResponse {
        this['message'] = message;
        return this;
    }
}