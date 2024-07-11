import { AppGroupsEntity } from './AppGroupsEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppGroupsResponse extends SdkResponse {
    public result?: Array<AppGroupsEntity>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AppGroupsEntity>): ListAppGroupsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListAppGroupsResponse {
        this['status'] = status;
        return this;
    }
}