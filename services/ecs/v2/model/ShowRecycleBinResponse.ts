import { RecycleBin } from './RecycleBin';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecycleBinResponse extends SdkResponse {
    private 'recycle_bin'?: RecycleBin;
    public constructor() { 
        super();
    }
    public withRecycleBin(recycleBin: RecycleBin): ShowRecycleBinResponse {
        this['recycle_bin'] = recycleBin;
        return this;
    }
    public set recycleBin(recycleBin: RecycleBin  | undefined) {
        this['recycle_bin'] = recycleBin;
    }
    public get recycleBin(): RecycleBin | undefined {
        return this['recycle_bin'];
    }
}