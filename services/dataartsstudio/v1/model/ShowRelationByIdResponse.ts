import { ShowRelationByIdResultData } from './ShowRelationByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRelationByIdResponse extends SdkResponse {
    public data?: ShowRelationByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowRelationByIdResultData): ShowRelationByIdResponse {
        this['data'] = data;
        return this;
    }
}