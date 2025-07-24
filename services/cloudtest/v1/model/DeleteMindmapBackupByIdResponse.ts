
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMindmapBackupByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteMindmapBackupByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): DeleteMindmapBackupByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DeleteMindmapBackupByIdResponse {
        this['message'] = message;
        return this;
    }
}