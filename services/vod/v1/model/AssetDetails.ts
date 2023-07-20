import { BaseInfo } from './BaseInfo';
import { TranscodeInfo } from './TranscodeInfo';


export class AssetDetails {
    private 'asset_id'?: string;
    private 'asset_status'?: AssetDetailsAssetStatusEnum | string;
    private 'transcode_status'?: AssetDetailsTranscodeStatusEnum | string;
    private 'base_info'?: BaseInfo;
    private 'transcode_info'?: TranscodeInfo;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): AssetDetails {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetStatus(assetStatus: AssetDetailsAssetStatusEnum | string): AssetDetails {
        this['asset_status'] = assetStatus;
        return this;
    }
    public set assetStatus(assetStatus: AssetDetailsAssetStatusEnum | string  | undefined) {
        this['asset_status'] = assetStatus;
    }
    public get assetStatus(): AssetDetailsAssetStatusEnum | string | undefined {
        return this['asset_status'];
    }
    public withTranscodeStatus(transcodeStatus: AssetDetailsTranscodeStatusEnum | string): AssetDetails {
        this['transcode_status'] = transcodeStatus;
        return this;
    }
    public set transcodeStatus(transcodeStatus: AssetDetailsTranscodeStatusEnum | string  | undefined) {
        this['transcode_status'] = transcodeStatus;
    }
    public get transcodeStatus(): AssetDetailsTranscodeStatusEnum | string | undefined {
        return this['transcode_status'];
    }
    public withBaseInfo(baseInfo: BaseInfo): AssetDetails {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: BaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): BaseInfo | undefined {
        return this['base_info'];
    }
    public withTranscodeInfo(transcodeInfo: TranscodeInfo): AssetDetails {
        this['transcode_info'] = transcodeInfo;
        return this;
    }
    public set transcodeInfo(transcodeInfo: TranscodeInfo  | undefined) {
        this['transcode_info'] = transcodeInfo;
    }
    public get transcodeInfo(): TranscodeInfo | undefined {
        return this['transcode_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssetDetailsAssetStatusEnum {
    CREATING = 'CREATING',
    FAILED = 'FAILED',
    CREATED = 'CREATED',
    PUBLISHED = 'PUBLISHED',
    DELETED = 'DELETED'
}
/**
    * @export
    * @enum {string}
    */
export enum AssetDetailsTranscodeStatusEnum {
    UN_TRANSCODE = 'UN_TRANSCODE',
    WAITING_TRANSCODE = 'WAITING_TRANSCODE',
    TRANSCODING = 'TRANSCODING',
    TRANSCODE_SUCCEED = 'TRANSCODE_SUCCEED',
    TRANSCODE_FAILED = 'TRANSCODE_FAILED'
}
