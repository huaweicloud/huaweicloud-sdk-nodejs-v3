import { CceInfo } from './CceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCceCompliantResponse extends SdkResponse {
    public count?: number;
    private 'cce_info_list'?: Array<CceInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCceCompliantResponse {
        this['count'] = count;
        return this;
    }
    public withCceInfoList(cceInfoList: Array<CceInfo>): ListCceCompliantResponse {
        this['cce_info_list'] = cceInfoList;
        return this;
    }
    public set cceInfoList(cceInfoList: Array<CceInfo>  | undefined) {
        this['cce_info_list'] = cceInfoList;
    }
    public get cceInfoList(): Array<CceInfo> | undefined {
        return this['cce_info_list'];
    }
}