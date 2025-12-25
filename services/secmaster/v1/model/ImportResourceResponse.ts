import { ImportResourceResponseBodyData } from './ImportResourceResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportResourceResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ImportResourceResponseBodyData;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportResourceResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportResourceResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ImportResourceResponseBodyData): ImportResourceResponse {
        this['data'] = data;
        return this;
    }
}