import { ImportIncidentsResponseBodyData } from './ImportIncidentsResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportIncidentsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ImportIncidentsResponseBodyData;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportIncidentsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportIncidentsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ImportIncidentsResponseBodyData): ImportIncidentsResponse {
        this['data'] = data;
        return this;
    }
}