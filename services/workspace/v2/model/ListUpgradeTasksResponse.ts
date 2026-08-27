import { UpgradeScheduledTaskVO } from './UpgradeScheduledTaskVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpgradeTasksResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<UpgradeScheduledTaskVO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListUpgradeTasksResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<UpgradeScheduledTaskVO>): ListUpgradeTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}