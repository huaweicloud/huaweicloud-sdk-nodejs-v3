import { MetadataTask } from './MetadataTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRocketMqMigrationTaskResponse extends SdkResponse {
    public total?: number;
    public task?: Array<MetadataTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRocketMqMigrationTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTask(task: Array<MetadataTask>): ListRocketMqMigrationTaskResponse {
        this['task'] = task;
        return this;
    }
}