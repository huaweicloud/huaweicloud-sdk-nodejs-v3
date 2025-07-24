import { BasePageInfoMindmapRecycle } from './BasePageInfoMindmapRecycle';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMindmapRecycleByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoMindmapRecycle;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMindmapRecycleByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoMindmapRecycle): ShowMindmapRecycleByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowMindmapRecycleByPageResponse {
        this['message'] = message;
        return this;
    }
}