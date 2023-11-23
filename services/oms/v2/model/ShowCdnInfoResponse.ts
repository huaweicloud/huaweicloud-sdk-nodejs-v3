import { CheckedKey } from './CheckedKey';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCdnInfoResponse extends SdkResponse {
    private 'is_same_cloud_type'?: boolean;
    private 'is_download_available'?: boolean;
    private 'checked_keys'?: Array<CheckedKey>;
    public constructor() { 
        super();
    }
    public withIsSameCloudType(isSameCloudType: boolean): ShowCdnInfoResponse {
        this['is_same_cloud_type'] = isSameCloudType;
        return this;
    }
    public set isSameCloudType(isSameCloudType: boolean  | undefined) {
        this['is_same_cloud_type'] = isSameCloudType;
    }
    public get isSameCloudType(): boolean | undefined {
        return this['is_same_cloud_type'];
    }
    public withIsDownloadAvailable(isDownloadAvailable: boolean): ShowCdnInfoResponse {
        this['is_download_available'] = isDownloadAvailable;
        return this;
    }
    public set isDownloadAvailable(isDownloadAvailable: boolean  | undefined) {
        this['is_download_available'] = isDownloadAvailable;
    }
    public get isDownloadAvailable(): boolean | undefined {
        return this['is_download_available'];
    }
    public withCheckedKeys(checkedKeys: Array<CheckedKey>): ShowCdnInfoResponse {
        this['checked_keys'] = checkedKeys;
        return this;
    }
    public set checkedKeys(checkedKeys: Array<CheckedKey>  | undefined) {
        this['checked_keys'] = checkedKeys;
    }
    public get checkedKeys(): Array<CheckedKey> | undefined {
        return this['checked_keys'];
    }
}