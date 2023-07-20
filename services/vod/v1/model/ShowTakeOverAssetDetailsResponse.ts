import { BaseInfo } from './BaseInfo';
import { TranscodeInfo } from './TranscodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTakeOverAssetDetailsResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'asset_status'?: ShowTakeOverAssetDetailsResponseAssetStatusEnum | string;
    private 'transcode_status'?: ShowTakeOverAssetDetailsResponseTranscodeStatusEnum | string;
    private 'base_info'?: BaseInfo;
    private 'transcode_info'?: TranscodeInfo;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): ShowTakeOverAssetDetailsResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetStatus(assetStatus: ShowTakeOverAssetDetailsResponseAssetStatusEnum | string): ShowTakeOverAssetDetailsResponse {
        this['asset_status'] = assetStatus;
        return this;
    }
    public set assetStatus(assetStatus: ShowTakeOverAssetDetailsResponseAssetStatusEnum | string  | undefined) {
        this['asset_status'] = assetStatus;
    }
    public get assetStatus(): ShowTakeOverAssetDetailsResponseAssetStatusEnum | string | undefined {
        return this['asset_status'];
    }
    public withTranscodeStatus(transcodeStatus: ShowTakeOverAssetDetailsResponseTranscodeStatusEnum | string): ShowTakeOverAssetDetailsResponse {
        this['transcode_status'] = transcodeStatus;
        return this;
    }
    public set transcodeStatus(transcodeStatus: ShowTakeOverAssetDetailsResponseTranscodeStatusEnum | string  | undefined) {
        this['transcode_status'] = transcodeStatus;
    }
    public get transcodeStatus(): ShowTakeOverAssetDetailsResponseTranscodeStatusEnum | string | undefined {
        return this['transcode_status'];
    }
    public withBaseInfo(baseInfo: BaseInfo): ShowTakeOverAssetDetailsResponse {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: BaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): BaseInfo | undefined {
        return this['base_info'];
    }
    public withTranscodeInfo(transcodeInfo: TranscodeInfo): ShowTakeOverAssetDetailsResponse {
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
export enum ShowTakeOverAssetDetailsResponseAssetStatusEnum {
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
export enum ShowTakeOverAssetDetailsResponseTranscodeStatusEnum {
    UN_TRANSCODE = 'UN_TRANSCODE',
    WAITING_TRANSCODE = 'WAITING_TRANSCODE',
    TRANSCODING = 'TRANSCODING',
    TRANSCODE_SUCCEED = 'TRANSCODE_SUCCEED',
    TRANSCODE_FAILED = 'TRANSCODE_FAILED'
}
