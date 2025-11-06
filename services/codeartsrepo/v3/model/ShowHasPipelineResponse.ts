
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHasPipelineResponse extends SdkResponse {
    public error?: Error;
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowHasPipelineResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: boolean): ShowHasPipelineResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowHasPipelineResponse {
        this['status'] = status;
        return this;
    }
}