import { UserUsageFrequencyInfo } from './UserUsageFrequencyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiAssistantUsageFrequencyResponse extends SdkResponse {
    public users?: Array<UserUsageFrequencyInfo>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<UserUsageFrequencyInfo>): ShowAiAssistantUsageFrequencyResponse {
        this['users'] = users;
        return this;
    }
}