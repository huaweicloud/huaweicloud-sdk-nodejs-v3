import { CentralNetworkCapability } from './CentralNetworkCapability';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkCapabilitiesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public capabilities?: Array<CentralNetworkCapability>;
    public constructor(requestId?: string, capabilities?: Array<CentralNetworkCapability>) { 
        super();
        this['request_id'] = requestId;
        this['capabilities'] = capabilities;
    }
    public withRequestId(requestId: string): ListCentralNetworkCapabilitiesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworkCapabilitiesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCapabilities(capabilities: Array<CentralNetworkCapability>): ListCentralNetworkCapabilitiesResponse {
        this['capabilities'] = capabilities;
        return this;
    }
}