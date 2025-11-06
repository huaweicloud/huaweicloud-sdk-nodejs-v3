import { Dashboard } from './Dashboard';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDashBoardsResponse extends SdkResponse {
    private 'page_size'?: number;
    public dashboards?: Array<Dashboard>;
    public constructor() { 
        super();
    }
    public withPageSize(pageSize: number): ListDashBoardsResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withDashboards(dashboards: Array<Dashboard>): ListDashBoardsResponse {
        this['dashboards'] = dashboards;
        return this;
    }
}