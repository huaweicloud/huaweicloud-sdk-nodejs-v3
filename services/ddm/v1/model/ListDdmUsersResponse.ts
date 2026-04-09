import { GetUsersListDetailResponsesV3 } from './GetUsersListDetailResponsesV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDdmUsersResponse extends SdkResponse {
    public users?: Array<GetUsersListDetailResponsesV3>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<GetUsersListDetailResponsesV3>): ListDdmUsersResponse {
        this['users'] = users;
        return this;
    }
    public withOffset(offset: number): ListDdmUsersResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdmUsersResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListDdmUsersResponse {
        this['total'] = total;
        return this;
    }
}