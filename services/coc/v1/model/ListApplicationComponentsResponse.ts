import { ComponentQueryResponseData } from './ComponentQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationComponentsResponse extends SdkResponse {
    public data?: Array<ComponentQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<ComponentQueryResponseData>): ListApplicationComponentsResponse {
        this['data'] = data;
        return this;
    }
}