
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBackupMindmapResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateBackupMindmapResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): CreateBackupMindmapResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): CreateBackupMindmapResponse {
        this['message'] = message;
        return this;
    }
}