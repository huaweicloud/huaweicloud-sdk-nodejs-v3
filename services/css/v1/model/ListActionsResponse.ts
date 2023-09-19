import { Actions } from './Actions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActionsResponse extends SdkResponse {
    public actions?: Array<Actions>;
    public constructor() { 
        super();
    }
    public withActions(actions: Array<Actions>): ListActionsResponse {
        this['actions'] = actions;
        return this;
    }
}