import { ResourceProductDataObjectInfo } from './ResourceProductDataObjectInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProductdataOfferingInfosResponse extends SdkResponse {
    public body?: Array<ResourceProductDataObjectInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ResourceProductDataObjectInfo>): ShowProductdataOfferingInfosResponse {
        this['body'] = body;
        return this;
    }
}