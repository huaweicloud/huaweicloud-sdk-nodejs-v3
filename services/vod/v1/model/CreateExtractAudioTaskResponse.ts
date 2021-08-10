
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExtractAudioTaskResponse extends SdkResponse {
    private 'asset_id'?: string | undefined;
    private 'audio_asset_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): CreateExtractAudioTaskResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withAudioAssetId(audioAssetId: string): CreateExtractAudioTaskResponse {
        this['audio_asset_id'] = audioAssetId;
        return this;
    }
    public set audioAssetId(audioAssetId: string | undefined) {
        this['audio_asset_id'] = audioAssetId;
    }
    public get audioAssetId() {
        return this['audio_asset_id'];
    }
}