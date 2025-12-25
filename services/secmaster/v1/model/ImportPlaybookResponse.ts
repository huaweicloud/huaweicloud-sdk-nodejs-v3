
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportPlaybookResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportPlaybookResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportPlaybookResponse {
        this['message'] = message;
        return this;
    }
}