import { CreateSubjectResultData } from './CreateSubjectResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSubjectNewResponse extends SdkResponse {
    public data?: CreateSubjectResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateSubjectResultData): CreateSubjectNewResponse {
        this['data'] = data;
        return this;
    }
}