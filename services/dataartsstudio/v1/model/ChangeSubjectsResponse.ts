import { ChangeSubjectsResultData } from './ChangeSubjectsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeSubjectsResponse extends SdkResponse {
    public data?: ChangeSubjectsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ChangeSubjectsResultData): ChangeSubjectsResponse {
        this['data'] = data;
        return this;
    }
}