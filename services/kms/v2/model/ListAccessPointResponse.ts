import { ListAccessPointResponseBodyAccessPoints } from './ListAccessPointResponseBodyAccessPoints';
import { ListAccessPointResponseBodyPageInfo } from './ListAccessPointResponseBodyPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessPointResponse extends SdkResponse {
    private 'page_info'?: ListAccessPointResponseBodyPageInfo;
    private 'access_points'?: Array<ListAccessPointResponseBodyAccessPoints>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: ListAccessPointResponseBodyPageInfo): ListAccessPointResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListAccessPointResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListAccessPointResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withAccessPoints(accessPoints: Array<ListAccessPointResponseBodyAccessPoints>): ListAccessPointResponse {
        this['access_points'] = accessPoints;
        return this;
    }
    public set accessPoints(accessPoints: Array<ListAccessPointResponseBodyAccessPoints>  | undefined) {
        this['access_points'] = accessPoints;
    }
    public get accessPoints(): Array<ListAccessPointResponseBodyAccessPoints> | undefined {
        return this['access_points'];
    }
}