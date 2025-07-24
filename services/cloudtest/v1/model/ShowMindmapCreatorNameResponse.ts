
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMindmapCreatorNameResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMindmapCreatorNameResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ShowMindmapCreatorNameResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowMindmapCreatorNameResponse {
        this['message'] = message;
        return this;
    }
}