import { HtapErrorLogDetailResponseErrorLogList } from './HtapErrorLogDetailResponseErrorLogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHtapErrorLogDetailResponse extends SdkResponse {
    private 'error_log_list'?: Array<HtapErrorLogDetailResponseErrorLogList>;
    public constructor() { 
        super();
    }
    public withErrorLogList(errorLogList: Array<HtapErrorLogDetailResponseErrorLogList>): ShowHtapErrorLogDetailResponse {
        this['error_log_list'] = errorLogList;
        return this;
    }
    public set errorLogList(errorLogList: Array<HtapErrorLogDetailResponseErrorLogList>  | undefined) {
        this['error_log_list'] = errorLogList;
    }
    public get errorLogList(): Array<HtapErrorLogDetailResponseErrorLogList> | undefined {
        return this['error_log_list'];
    }
}