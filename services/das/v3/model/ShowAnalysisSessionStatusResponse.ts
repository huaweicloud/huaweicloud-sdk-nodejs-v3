
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAnalysisSessionStatusResponse extends SdkResponse {
    public status?: string;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowAnalysisSessionStatusResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): ShowAnalysisSessionStatusResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}