import { Workspacebody } from './Workspacebody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManagerWorkSpacesResponse extends SdkResponse {
    public count?: number;
    private 'total_page'?: number;
    public data?: Array<Workspacebody>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListManagerWorkSpacesResponse {
        this['count'] = count;
        return this;
    }
    public withTotalPage(totalPage: number): ListManagerWorkSpacesResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withData(data: Array<Workspacebody>): ListManagerWorkSpacesResponse {
        this['data'] = data;
        return this;
    }
}