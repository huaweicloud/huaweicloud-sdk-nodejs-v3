import { CommonDataObjectImportResponseData } from './CommonDataObjectImportResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportDataobjectsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: CommonDataObjectImportResponseData;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportDataobjectsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ImportDataobjectsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: CommonDataObjectImportResponseData): ImportDataobjectsResponse {
        this['data'] = data;
        return this;
    }
}