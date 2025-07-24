
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMindmapRecycleByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMindmapRecycleByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ShowMindmapRecycleByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowMindmapRecycleByIdResponse {
        this['message'] = message;
        return this;
    }
}