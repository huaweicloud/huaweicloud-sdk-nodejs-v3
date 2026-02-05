import { ImportIndicatorsResponseBodyData } from './ImportIndicatorsResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportIndicatorsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ImportIndicatorsResponseBodyData;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportIndicatorsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportIndicatorsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ImportIndicatorsResponseBodyData): ImportIndicatorsResponse {
        this['data'] = data;
        return this;
    }
}