import { DataProcessInfo } from './DataProcessInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataProgressResponse extends SdkResponse {
    private 'data_process_info'?: Array<DataProcessInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDataProcessInfo(dataProcessInfo: Array<DataProcessInfo>): ShowDataProgressResponse {
        this['data_process_info'] = dataProcessInfo;
        return this;
    }
    public set dataProcessInfo(dataProcessInfo: Array<DataProcessInfo>  | undefined) {
        this['data_process_info'] = dataProcessInfo;
    }
    public get dataProcessInfo(): Array<DataProcessInfo> | undefined {
        return this['data_process_info'];
    }
    public withCount(count: number): ShowDataProgressResponse {
        this['count'] = count;
        return this;
    }
}