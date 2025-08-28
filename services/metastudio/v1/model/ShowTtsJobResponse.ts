import { TtsJobDetail } from './TtsJobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTtsJobResponse extends SdkResponse {
    public count?: number;
    public data?: Array<TtsJobDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowTtsJobResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<TtsJobDetail>): ShowTtsJobResponse {
        this['data'] = data;
        return this;
    }
}