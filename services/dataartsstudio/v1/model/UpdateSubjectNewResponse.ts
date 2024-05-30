import { CreateSubjectResultData } from './CreateSubjectResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubjectNewResponse extends SdkResponse {
    public data?: CreateSubjectResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateSubjectResultData): UpdateSubjectNewResponse {
        this['data'] = data;
        return this;
    }
}