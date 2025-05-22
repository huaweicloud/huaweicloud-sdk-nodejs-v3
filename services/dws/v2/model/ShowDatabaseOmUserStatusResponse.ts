import { DatabaseOmUserInfo } from './DatabaseOmUserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatabaseOmUserStatusResponse extends SdkResponse {
    private 'error_code'?: number;
    private 'error_msg'?: string;
    private 'om_user_info'?: DatabaseOmUserInfo;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: number): ShowDatabaseOmUserStatusResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: number  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): number | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowDatabaseOmUserStatusResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withOmUserInfo(omUserInfo: DatabaseOmUserInfo): ShowDatabaseOmUserStatusResponse {
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