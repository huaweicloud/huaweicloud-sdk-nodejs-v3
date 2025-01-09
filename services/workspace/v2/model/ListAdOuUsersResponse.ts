import { AdOuUserInfo } from './AdOuUserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAdOuUsersResponse extends SdkResponse {
    private 'user_infos'?: Array<AdOuUserInfo>;
    private 'total_count'?: number;
    private 'enable_create_count'?: number;
    public constructor() { 
        super();
    }
    public withUserInfos(userInfos: Array<AdOuUserInfo>): ListAdOuUsersResponse {
        this['user_infos'] = userInfos;
        return this;
    }
    public set userInfos(userInfos: Array<AdOuUserInfo>  | undefined) {
        this['user_infos'] = userInfos;
    }
    public get userInfos(): Array<AdOuUserInfo> | undefined {
        return this['user_infos'];
    }
    public withTotalCount(totalCount: number): ListAdOuUsersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withEnableCreateCount(enableCreateCount: number): ListAdOuUsersResponse {
        this['enable_create_count'] = enableCreateCount;
        return this;
    }
    public set enableCreateCount(enableCreateCount: number  | undefined) {
        this['enable_create_count'] = enableCreateCount;
    }
    public get enableCreateCount(): number | undefined {
        return this['enable_create_count'];
    }
}