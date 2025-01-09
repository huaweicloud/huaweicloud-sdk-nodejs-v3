import { UserDetail } from './UserDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserDetailResponse extends SdkResponse {
    private 'user_detail'?: UserDetail;
    public constructor() { 
        super();
    }
    public withUserDetail(userDetail: UserDetail): ListUserDetailResponse {
        this['user_detail'] = userDetail;
        return this;
    }
    public set userDetail(userDetail: UserDetail  | undefined) {
        this['user_detail'] = userDetail;
    }
    public get userDetail(): UserDetail | undefined {
        return this['user_detail'];
    }
}