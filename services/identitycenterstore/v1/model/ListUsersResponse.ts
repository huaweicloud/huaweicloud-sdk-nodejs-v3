import { PageInfoDto } from './PageInfoDto';
import { UserDto } from './UserDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    private 'page_info'?: PageInfoDto;
    public users?: Array<UserDto>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: PageInfoDto): ListUsersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
    public withUsers(users: Array<UserDto>): ListUsersResponse {
        this['users'] = users;
        return this;
    }
}