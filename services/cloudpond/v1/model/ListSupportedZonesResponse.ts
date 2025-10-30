import { PageInfo } from './PageInfo';
import { ZoneDetail } from './ZoneDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportedZonesResponse extends SdkResponse {
    public zones?: Array<ZoneDetail>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withZones(zones: Array<ZoneDetail>): ListSupportedZonesResponse {
        this['zones'] = zones;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListSupportedZonesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}