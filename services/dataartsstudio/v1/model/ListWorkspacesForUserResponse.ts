import { Workspacebody } from './Workspacebody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkspacesForUserResponse extends SdkResponse {
    public count?: number;
    private 'total_page'?: number;
    public data?: Array<Workspacebody>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListWorkspacesForUserResponse {
        this['count'] = count;
        return this;
    }
    public withTotalPage(totalPage: number): ListWorkspacesForUserResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withData(data: Array<Workspacebody>): ListWorkspacesForUserResponse {
        this['data'] = data;
        return this;
    }
}