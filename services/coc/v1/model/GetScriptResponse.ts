import { ScriptDetailModel } from './ScriptDetailModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetScriptResponse extends SdkResponse {
    public data?: ScriptDetailModel;
    public constructor() { 
        super();
    }
    public withData(data: ScriptDetailModel): GetScriptResponse {
        this['data'] = data;
        return this;
    }
}