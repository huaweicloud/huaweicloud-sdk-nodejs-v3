import { DirectConnectLocationEntry } from './DirectConnectLocationEntry';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDirectConnectLocationsResponse extends SdkResponse {
    private 'direct_connect_locations'?: Array<DirectConnectLocationEntry>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withDirectConnectLocations(directConnectLocations: Array<DirectConnectLocationEntry>): ListDirectConnectLocationsResponse {
        this['direct_connect_locations'] = directConnectLocations;
        return this;
    }
    public set directConnectLocations(directConnectLocations: Array<DirectConnectLocationEntry>  | undefined) {
        this['direct_connect_locations'] = directConnectLocations;
    }
    public get directConnectLocations(): Array<DirectConnectLocationEntry> | undefined {
        return this['direct_connect_locations'];
    }
    public withPageInfo(pageInfo: PageInfo): ListDirectConnectLocationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListDirectConnectLocationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}