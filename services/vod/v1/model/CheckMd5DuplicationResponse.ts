
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckMd5DuplicationResponse extends SdkResponse {
    private 'is_duplicated'?: number | undefined;
    private 'asset_ids'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withIsDuplicated(isDuplicated: number): CheckMd5DuplicationResponse {
        this['is_duplicated'] = isDuplicated;
        return this;
    }
    public set isDuplicated(isDuplicated: number | undefined) {
        this['is_duplicated'] = isDuplicated;
    }
    public get isDuplicated() {
        return this['is_duplicated'];
    }
    public withAssetIds(assetIds: Array<string>): CheckMd5DuplicationResponse {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string> | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds() {
        return this['asset_ids'];
    }
}