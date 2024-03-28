import { AuthInfo } from './AuthInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuthInfoResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public count?: number;
    private 'auth_infos'?: Array<AuthInfo>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListAuthInfoResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListAuthInfoResponse {
        this['message'] = message;
        return this;
    }
    public withCount(count: number): ListAuthInfoResponse {
        this['count'] = count;
        return this;
    }
    public withAuthInfos(authInfos: Array<AuthInfo>): ListAuthInfoResponse {
        this['auth_infos'] = authInfos;
        return this;
    }
    public set authInfos(authInfos: Array<AuthInfo>  | undefined) {
        this['auth_infos'] = authInfos;
    }
    public get authInfos(): Array<AuthInfo> | undefined {
        return this['auth_infos'];
    }
}