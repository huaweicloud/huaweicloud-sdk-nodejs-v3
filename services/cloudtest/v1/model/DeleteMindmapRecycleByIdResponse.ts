
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMindmapRecycleByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteMindmapRecycleByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): DeleteMindmapRecycleByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DeleteMindmapRecycleByIdResponse {
        this['message'] = message;
        return this;
    }
}