import { Actions } from './Actions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActionsResponse extends SdkResponse {
    public actions?: Array<Actions>;
    public totalSize?: number;
    public constructor() { 
        super();
    }
    public withActions(actions: Array<Actions>): ListActionsResponse {
        this['actions'] = actions;
        return this;
    }
    public withTotalSize(totalSize: number): ListActionsResponse {
        this['totalSize'] = totalSize;
        return this;
    }
}