import { PageInfo } from './PageInfo';
import { Rack } from './Rack';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRacksResponse extends SdkResponse {
    public racks?: Array<Rack>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRacks(racks: Array<Rack>): ListRacksResponse {
        this['racks'] = racks;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListRacksResponse {
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