
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssetProcessTaskResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'thumbnail_task_id'?: string;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): CreateAssetProcessTaskResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withThumbnailTaskId(thumbnailTaskId: string): CreateAssetProcessTaskResponse {
        this['thumbnail_task_id'] = thumbnailTaskId;
        return this;
    }
    public set thumbnailTaskId(thumbnailTaskId: string  | undefined) {
        this['thumbnail_task_id'] = thumbnailTaskId;
    }
    public get thumbnailTaskId(): string | undefined {
        return this['thumbnail_task_id'];
    }
}