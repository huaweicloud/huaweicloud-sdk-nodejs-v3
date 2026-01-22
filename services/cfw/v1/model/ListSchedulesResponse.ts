import { PageDataScheduleVO } from './PageDataScheduleVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSchedulesResponse extends SdkResponse {
    public data?: PageDataScheduleVO;
    public constructor() { 
        super();
    }
    public withData(data: PageDataScheduleVO): ListSchedulesResponse {
        this['data'] = data;
        return this;
    }
}