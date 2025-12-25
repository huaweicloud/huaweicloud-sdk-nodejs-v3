import { ResourceDetail } from './ResourceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeResourceResponse extends SdkResponse {
    private 'data_object'?: ResourceDetail;
    public constructor() { 
        super();
    }
    public withDataObject(dataObject: ResourceDetail): ChangeResourceResponse {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: ResourceDetail  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): ResourceDetail | undefined {
        return this['data_object'];
    }
}