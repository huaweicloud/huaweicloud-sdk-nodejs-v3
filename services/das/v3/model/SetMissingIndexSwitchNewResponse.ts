
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetMissingIndexSwitchNewResponse extends SdkResponse {
    public success?: boolean;
    public status?: number;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SetMissingIndexSwitchNewResponse {
        this['success'] = success;
        return this;
    }
    public withStatus(status: number): SetMissingIndexSwitchNewResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): SetMissingIndexSwitchNewResponse {
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