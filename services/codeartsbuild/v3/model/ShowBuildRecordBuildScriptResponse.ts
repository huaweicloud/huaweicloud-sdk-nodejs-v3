
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuildRecordBuildScriptResponse extends SdkResponse {
    public result?: string;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ShowBuildRecordBuildScriptResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowBuildRecordBuildScriptResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowBuildRecordBuildScriptResponse {
        this['status'] = status;
        return this;
    }
}