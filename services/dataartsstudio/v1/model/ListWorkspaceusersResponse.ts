import { ApigWorkspaceUserbody } from './ApigWorkspaceUserbody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkspaceusersResponse extends SdkResponse {
    public count?: number;
    private 'total_page'?: number;
    public data?: Array<ApigWorkspaceUserbody>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListWorkspaceusersResponse {
        this['count'] = count;
        return this;
    }
    public withTotalPage(totalPage: number): ListWorkspaceusersResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withData(data: Array<ApigWorkspaceUserbody>): ListWorkspaceusersResponse {
        this['data'] = data;
        return this;
    }
}