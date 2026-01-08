import { ShowDesktopPoolListByUsersInfo } from './ShowDesktopPoolListByUsersInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopPoolsByUsersResponse extends SdkResponse {
    public users?: Array<ShowDesktopPoolListByUsersInfo>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<ShowDesktopPoolListByUsersInfo>): ListDesktopPoolsByUsersResponse {
        this['users'] = users;
        return this;
    }
}