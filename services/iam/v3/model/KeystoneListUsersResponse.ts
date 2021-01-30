import { KeystoneListUsersResult } from './KeystoneListUsersResult';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListUsersResponse extends SdkResponse {
    public links?: Links;
    public users?: Array<KeystoneListUsersResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListUsersResponse {
        this['links'] = links;
        return this;
    }
    public withUsers(users: Array<KeystoneListUsersResult>): KeystoneListUsersResponse {
        this['users'] = users;
        return this;
    }
}