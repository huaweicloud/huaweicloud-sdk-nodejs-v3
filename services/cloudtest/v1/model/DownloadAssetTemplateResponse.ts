
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadAssetTemplateResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DownloadAssetTemplateResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): DownloadAssetTemplateResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DownloadAssetTemplateResponse {
        this['message'] = message;
        return this;
    }
}