import { GrantedUsersDto } from './GrantedUsersDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductPermissionResourcesGrantedUsersResponse extends SdkResponse {
    public body?: Array<GrantedUsersDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GrantedUsersDto>): ListProductPermissionResourcesGrantedUsersResponse {
        this['body'] = body;
        return this;
    }
}