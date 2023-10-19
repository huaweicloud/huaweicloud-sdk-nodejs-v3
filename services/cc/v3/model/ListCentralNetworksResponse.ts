import { CentralNetwork } from './CentralNetwork';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworksResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'central_networks'?: Array<CentralNetwork>;
    public constructor(requestId?: string, centralNetworks?: Array<CentralNetwork>) { 
        super();
        this['request_id'] = requestId;
        this['central_networks'] = centralNetworks;
    }
    public withRequestId(requestId: string): ListCentralNetworksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCentralNetworks(centralNetworks: Array<CentralNetwork>): ListCentralNetworksResponse {
        this['central_networks'] = centralNetworks;
        return this;
    }
    public set centralNetworks(centralNetworks: Array<CentralNetwork>  | undefined) {
        this['central_networks'] = centralNetworks;
    }
    public get centralNetworks(): Array<CentralNetwork> | undefined {
        return this['central_networks'];
    }
}