import { BasePageInfoTestPoint } from './BasePageInfoTestPoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTestpointByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoTestPoint;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowTestpointByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoTestPoint): ShowTestpointByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowTestpointByPageResponse {
        this['message'] = message;
        return this;
    }
}