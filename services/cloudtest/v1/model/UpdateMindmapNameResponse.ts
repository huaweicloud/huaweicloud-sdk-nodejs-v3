
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMindmapNameResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateMindmapNameResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): UpdateMindmapNameResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): UpdateMindmapNameResponse {
        this['message'] = message;
        return this;
    }
}