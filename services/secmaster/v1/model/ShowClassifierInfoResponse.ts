import { DpeClassifyDetail } from './DpeClassifyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClassifierInfoResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DpeClassifyDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowClassifierInfoResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowClassifierInfoResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DpeClassifyDetail): ShowClassifierInfoResponse {
        this['data'] = data;
        return this;
    }
}