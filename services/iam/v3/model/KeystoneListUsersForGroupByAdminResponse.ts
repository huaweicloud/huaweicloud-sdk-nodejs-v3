import { KeystoneUserResult } from './KeystoneUserResult';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListUsersForGroupByAdminResponse extends SdkResponse {
    public links?: Links;
    public users?: Array<KeystoneUserResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListUsersForGroupByAdminResponse {
        this['links'] = links;
        return this;
    }
    public withUsers(users: Array<KeystoneUserResult>): KeystoneListUsersForGroupByAdminResponse {
        this['users'] = users;
        return this;
    }
}