import { ListBatchOperationTasksItem } from './ListBatchOperationTasksItem';
import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBatchOperationTasksResponse extends SdkResponse {
    public tasks?: Array<ListBatchOperationTasksItem>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<ListBatchOperationTasksItem>): ListBatchOperationTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withMetadata(metadata: Metadata): ListBatchOperationTasksResponse {
        this['metadata'] = metadata;
        return this;
    }
}