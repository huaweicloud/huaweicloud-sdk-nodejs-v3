import { ImportParserVo } from './ImportParserVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportCollectorParserResponse extends SdkResponse {
    public fail?: number;
    public result?: Array<ImportParserVo>;
    public success?: number;
    public constructor() { 
        super();
    }
    public withFail(fail: number): ImportCollectorParserResponse {
        this['fail'] = fail;
        return this;
    }
    public withResult(result: Array<ImportParserVo>): ImportCollectorParserResponse {
        this['result'] = result;
        return this;
    }
    public withSuccess(success: number): ImportCollectorParserResponse {
        this['success'] = success;
        return this;
    }
}