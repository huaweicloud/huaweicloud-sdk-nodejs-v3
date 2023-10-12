import { DatabaseOmUserInfo } from './DatabaseOmUserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteDatabaseOmUserActionResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'om_user_info'?: DatabaseOmUserInfo;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ExecuteDatabaseOmUserActionResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ExecuteDatabaseOmUserActionResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withOmUserInfo(omUserInfo: DatabaseOmUserInfo): ExecuteDatabaseOmUserActionResponse {
        this['om_user_info'] = omUserInfo;
        return this;
    }
    public set omUserInfo(omUserInfo: DatabaseOmUserInfo  | undefined) {
        this['om_user_info'] = omUserInfo;
    }
    public get omUserInfo(): DatabaseOmUserInfo | undefined {
        return this['om_user_info'];
    }
}