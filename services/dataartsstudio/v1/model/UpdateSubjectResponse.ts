import { CreateSubjectResultData } from './CreateSubjectResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubjectResponse extends SdkResponse {
    public data?: CreateSubjectResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateSubjectResultData): UpdateSubjectResponse {
        this['data'] = data;
        return this;
    }
}