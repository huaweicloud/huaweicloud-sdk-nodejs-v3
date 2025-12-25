
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteReportActionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public file?: object;
    public constructor() { 
        super();
    }
    public withCode(code: string): ExecuteReportActionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ExecuteReportActionResponse {
        this['message'] = message;
        return this;
    }
    public withFile(file: object): ExecuteReportActionResponse {
        this['file'] = file;
        return this;
    }
}