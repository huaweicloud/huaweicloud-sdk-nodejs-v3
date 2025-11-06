import { DashBoardsFolder } from './DashBoardsFolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDashboardsFolderResponse extends SdkResponse {
    public body?: Array<DashBoardsFolder>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DashBoardsFolder>): ListDashboardsFolderResponse {
        this['body'] = body;
        return this;
    }
}