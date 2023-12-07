import { AuthInfos } from './AuthInfos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobAuthInfosResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public count?: number;
    private 'auth_infos'?: Array<AuthInfos>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListJobAuthInfosResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListJobAuthInfosResponse {
        this['message'] = message;
        return this;
    }
    public withCount(count: number): ListJobAuthInfosResponse {
        this['count'] = count;
        return this;
    }
    public withAuthInfos(authInfos: Array<AuthInfos>): ListJobAuthInfosResponse {
        this['auth_infos'] = authInfos;
        return this;
    }
    public set authInfos(authInfos: Array<AuthInfos>  | undefined) {
        this['auth_infos'] = authInfos;
    }
    public get authInfos(): Array<AuthInfos> | undefined {
        return this['auth_infos'];
    }
}