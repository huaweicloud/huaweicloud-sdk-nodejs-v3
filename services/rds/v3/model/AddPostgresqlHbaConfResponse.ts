
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddPostgresqlHbaConfResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): AddPostgresqlHbaConfResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): AddPostgresqlHbaConfResponse {
        this['message'] = message;
        return this;
    }
}