
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetSqlSwitchNewResponse extends SdkResponse {
    public success?: boolean;
    public status?: number;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SetSqlSwitchNewResponse {
        this['success'] = success;
        return this;
    }
    public withStatus(status: number): SetSqlSwitchNewResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): SetSqlSwitchNewResponse {
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