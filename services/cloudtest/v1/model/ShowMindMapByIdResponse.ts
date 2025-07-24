import { MindmapObject } from './MindmapObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMindMapByIdResponse extends SdkResponse {
    public code?: string;
    public data?: MindmapObject;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMindMapByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: MindmapObject): ShowMindMapByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowMindMapByIdResponse {
        this['message'] = message;
        return this;
    }
}