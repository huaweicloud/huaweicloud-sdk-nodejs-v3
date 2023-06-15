import { V2FramerateInfo } from './V2FramerateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSingleStreamFramerateResponse extends SdkResponse {
    private 'framerate_info_list'?: Array<V2FramerateInfo> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withFramerateInfoList(framerateInfoList: Array<V2FramerateInfo>): ListSingleStreamFramerateResponse {
        this['framerate_info_list'] = framerateInfoList;
        return this;
    }
    public set framerateInfoList(framerateInfoList: Array<V2FramerateInfo> | undefined) {
        this['framerate_info_list'] = framerateInfoList;
    }
    public get framerateInfoList() {
        return this['framerate_info_list'];
    }
    public withXRequestId(xRequestId: string): ListSingleStreamFramerateResponse {
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