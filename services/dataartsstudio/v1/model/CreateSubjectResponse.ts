import { CreateSubjectResultData } from './CreateSubjectResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSubjectResponse extends SdkResponse {
    public data?: CreateSubjectResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateSubjectResultData): CreateSubjectResponse {
        this['data'] = data;
        return this;
    }
}