import { ImportVulnerabilitiesResponseBodyData } from './ImportVulnerabilitiesResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportVulnerabilitiesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ImportVulnerabilitiesResponseBodyData;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportVulnerabilitiesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportVulnerabilitiesResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ImportVulnerabilitiesResponseBodyData): ImportVulnerabilitiesResponse {
        this['data'] = data;
        return this;
    }
}