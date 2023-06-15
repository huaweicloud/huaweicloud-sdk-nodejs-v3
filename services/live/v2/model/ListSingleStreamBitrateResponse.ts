import { V2BitrateInfo } from './V2BitrateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSingleStreamBitrateResponse extends SdkResponse {
    private 'bitrate_info_list'?: Array<V2BitrateInfo> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBitrateInfoList(bitrateInfoList: Array<V2BitrateInfo>): ListSingleStreamBitrateResponse {
        this['bitrate_info_list'] = bitrateInfoList;
        return this;
    }
    public set bitrateInfoList(bitrateInfoList: Array<V2BitrateInfo> | undefined) {
        this['bitrate_info_list'] = bitrateInfoList;
    }
    public get bitrateInfoList() {
        return this['bitrate_info_list'];
    }
    public withXRequestId(xRequestId: string): ListSingleStreamBitrateResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}