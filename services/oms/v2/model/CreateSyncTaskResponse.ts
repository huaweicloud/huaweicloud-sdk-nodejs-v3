
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSyncTaskResponse extends SdkResponse {
    private 'sync_task_id'?: string;
    public constructor() { 
        super();
    }
    public withSyncTaskId(syncTaskId: string): CreateSyncTaskResponse {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
}