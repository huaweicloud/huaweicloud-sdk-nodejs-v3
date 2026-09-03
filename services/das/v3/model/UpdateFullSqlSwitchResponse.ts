
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFullSqlSwitchResponse extends SdkResponse {
    public success?: boolean;
    public status?: number;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UpdateFullSqlSwitchResponse {
        this['success'] = success;
        return this;
    }
    public withStatus(status: number): UpdateFullSqlSwitchResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): UpdateFullSqlSwitchResponse {
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