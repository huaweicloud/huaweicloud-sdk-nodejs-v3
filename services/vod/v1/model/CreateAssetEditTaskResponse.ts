
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssetEditTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'asset_id'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateAssetEditTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withAssetId(assetId: string): CreateAssetEditTaskResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
}