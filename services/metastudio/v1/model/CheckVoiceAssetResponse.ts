import { TtscAssetExtraMeta } from './TtscAssetExtraMeta';
import { TtscAssetFileInfo } from './TtscAssetFileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckVoiceAssetResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'asset_name'?: string;
    private 'asset_type'?: string;
    private 'asset_state'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'asset_extra_meta'?: TtscAssetExtraMeta;
    public files?: Array<TtscAssetFileInfo>;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): CheckVoiceAssetResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetName(assetName: string): CheckVoiceAssetResponse {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetType(assetType: string): CheckVoiceAssetResponse {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): string | undefined {
        return this['asset_type'];
    }
    public withAssetState(assetState: string): CheckVoiceAssetResponse {
        this['asset_state'] = assetState;
        return this;
    }
    public set assetState(assetState: string  | undefined) {
        this['asset_state'] = assetState;
    }
    public get assetState(): string | undefined {
        return this['asset_state'];
    }
    public withCreateTime(createTime: string): CheckVoiceAssetResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CheckVoiceAssetResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAssetExtraMeta(assetExtraMeta: TtscAssetExtraMeta): CheckVoiceAssetResponse {
        this['asset_extra_meta'] = assetExtraMeta;
        return this;
    }
    public set assetExtraMeta(assetExtraMeta: TtscAssetExtraMeta  | undefined) {
        this['asset_extra_meta'] = assetExtraMeta;
    }
    public get assetExtraMeta(): TtscAssetExtraMeta | undefined {
        return this['asset_extra_meta'];
    }
    public withFiles(files: Array<TtscAssetFileInfo>): CheckVoiceAssetResponse {
        this['files'] = files;
        return this;
    }
}