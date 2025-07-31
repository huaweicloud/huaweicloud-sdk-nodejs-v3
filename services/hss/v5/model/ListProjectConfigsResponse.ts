import { ProjectConfigInfo } from './ProjectConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectConfigsResponse extends SdkResponse {
    private 'data_list'?: Array<ProjectConfigInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<ProjectConfigInfo>): ListProjectConfigsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ProjectConfigInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ProjectConfigInfo> | undefined {
        return this['data_list'];
    }
}