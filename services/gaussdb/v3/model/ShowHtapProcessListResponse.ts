import { HtapProcessInfo } from './HtapProcessInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHtapProcessListResponse extends SdkResponse {
    private 'process_list'?: Array<HtapProcessInfo>;
    public constructor() { 
        super();
    }
    public withProcessList(processList: Array<HtapProcessInfo>): ShowHtapProcessListResponse {
        this['process_list'] = processList;
        return this;
    }
    public set processList(processList: Array<HtapProcessInfo>  | undefined) {
        this['process_list'] = processList;
    }
    public get processList(): Array<HtapProcessInfo> | undefined {
        return this['process_list'];
    }
}