import { PageInfo } from './PageInfo';
import { User } from './User';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersV5Response extends SdkResponse {
    public users?: Array<User>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<User>): ListUsersV5Response {
        this['users'] = users;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListUsersV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}