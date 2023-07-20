import { LogGroup } from './LogGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogGroupsResponse extends SdkResponse {
    private 'log_groups'?: Array<LogGroup>;
    public constructor() { 
        super();
    }
    public withLogGroups(logGroups: Array<LogGroup>): ListLogGroupsResponse {
        this['log_groups'] = logGroups;
        return this;
    }
    public set logGroups(logGroups: Array<LogGroup>  | undefined) {
        this['log_groups'] = logGroups;
    }
    public get logGroups(): Array<LogGroup> | undefined {
        return this['log_groups'];
    }
}