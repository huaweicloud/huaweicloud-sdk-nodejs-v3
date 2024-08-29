import { ReplicationEncInfo } from './ReplicationEncInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetReplicationInfoResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'asset_info'?: string;
    private 'encryption_info'?: ReplicationEncInfo;
    private 'expire_time'?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): ShowAssetReplicationInfoResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetInfo(assetInfo: string): ShowAssetReplicationInfoResponse {
        this['asset_info'] = assetInfo;
        return this;
    }
    public set assetInfo(assetInfo: string  | undefined) {
        this['asset_info'] = assetInfo;
    }
    public get assetInfo(): string | undefined {
        return this['asset_info'];
    }
    public withEncryptionInfo(encryptionInfo: ReplicationEncInfo): ShowAssetReplicationInfoResponse {
        this['encryption_info'] = encryptionInfo;
        return this;
    }
    public set encryptionInfo(encryptionInfo: ReplicationEncInfo  | undefined) {
        this['encryption_info'] = encryptionInfo;
    }
    public get encryptionInfo(): ReplicationEncInfo | undefined {
        return this['encryption_info'];
    }
    public withExpireTime(expireTime: number): ShowAssetReplicationInfoResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withXRequestId(xRequestId: string): ShowAssetReplicationInfoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}