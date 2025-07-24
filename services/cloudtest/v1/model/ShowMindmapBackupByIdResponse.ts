
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMindmapBackupByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMindmapBackupByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ShowMindmapBackupByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowMindmapBackupByIdResponse {
        this['message'] = message;
        return this;
    }
}