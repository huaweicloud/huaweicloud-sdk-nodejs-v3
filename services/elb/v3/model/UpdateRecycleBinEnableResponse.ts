import { RecycleBinResponseBody } from './RecycleBinResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRecycleBinEnableResponse extends SdkResponse {
    private 'recycle_bin'?: RecycleBinResponseBody;
    public constructor() { 
        super();
    }
    public withRecycleBin(recycleBin: RecycleBinResponseBody): UpdateRecycleBinEnableResponse {
        this['recycle_bin'] = recycleBin;
        return this;
    }
    public set recycleBin(recycleBin: RecycleBinResponseBody  | undefined) {
        this['recycle_bin'] = recycleBin;
    }
    public get recycleBin(): RecycleBinResponseBody | undefined {
        return this['recycle_bin'];
    }
}