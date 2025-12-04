import { ListCloudServiceResponseItemInfo } from './ListCloudServiceResponseItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudServicesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'cloud_services'?: Array<ListCloudServiceResponseItemInfo>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListCloudServicesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCloudServices(cloudServices: Array<ListCloudServiceResponseItemInfo>): ListCloudServicesResponse {
        this['cloud_services'] = cloudServices;
        return this;
    }
    public set cloudServices(cloudServices: Array<ListCloudServiceResponseItemInfo>  | undefined) {
        this['cloud_services'] = cloudServices;
    }
    public get cloudServices(): Array<ListCloudServiceResponseItemInfo> | undefined {
        return this['cloud_services'];
    }
}