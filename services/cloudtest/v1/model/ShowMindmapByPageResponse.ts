import { MindmapPageParamV3 } from './MindmapPageParamV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMindmapByPageResponse extends SdkResponse {
    public params?: MindmapPageParamV3;
    public constructor() { 
        super();
    }
    public withParams(params: MindmapPageParamV3): ShowMindmapByPageResponse {
        this['params'] = params;
        return this;
    }
}