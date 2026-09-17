import { DasConnInfo } from './DasConnInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConnectionDetailResponse extends SdkResponse {
    private 'das_conn_info'?: DasConnInfo;
    public constructor() { 
        super();
    }
    public withDasConnInfo(dasConnInfo: DasConnInfo): ShowConnectionDetailResponse {
        this['das_conn_info'] = dasConnInfo;
        return this;
    }
    public set dasConnInfo(dasConnInfo: DasConnInfo  | undefined) {
        this['das_conn_info'] = dasConnInfo;
    }
    public get dasConnInfo(): DasConnInfo | undefined {
        return this['das_conn_info'];
    }
}