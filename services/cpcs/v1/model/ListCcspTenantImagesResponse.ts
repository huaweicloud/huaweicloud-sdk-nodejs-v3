import { ImageInfo } from './ImageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCcspTenantImagesResponse extends SdkResponse {
    private 'total_num'?: number;
    public result?: Array<ImageInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCcspTenantImagesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: Array<ImageInfo>): ListCcspTenantImagesResponse {
        this['result'] = result;
        return this;
    }
}