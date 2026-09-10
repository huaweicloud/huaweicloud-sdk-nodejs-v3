import { ListCloudPhoneServersModelOfferingsResponseBodyModels } from './ListCloudPhoneServersModelOfferingsResponseBodyModels';
import { ListCloudPhoneServersModelOfferingsResponseBodyPageInfo } from './ListCloudPhoneServersModelOfferingsResponseBodyPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudPhoneServerModelOfferingsResponse extends SdkResponse {
    private 'request_id'?: string;
    public count?: number;
    public models?: Array<ListCloudPhoneServersModelOfferingsResponseBodyModels>;
    private 'page_info'?: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListCloudPhoneServerModelOfferingsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCount(count: number): ListCloudPhoneServerModelOfferingsResponse {
        this['count'] = count;
        return this;
    }
    public withModels(models: Array<ListCloudPhoneServersModelOfferingsResponseBodyModels>): ListCloudPhoneServerModelOfferingsResponse {
        this['models'] = models;
        return this;
    }
    public withPageInfo(pageInfo: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo): ListCloudPhoneServerModelOfferingsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListCloudPhoneServersModelOfferingsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
}