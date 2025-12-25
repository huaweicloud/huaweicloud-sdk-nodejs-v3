import { DatasetItem } from './DatasetItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudLogResourcesResponse extends SdkResponse {
    public datasets?: Array<DatasetItem>;
    public exist?: boolean;
    public workspaces?: Array<string>;
    public constructor() { 
        super();
    }
    public withDatasets(datasets: Array<DatasetItem>): ListCloudLogResourcesResponse {
        this['datasets'] = datasets;
        return this;
    }
    public withExist(exist: boolean): ListCloudLogResourcesResponse {
        this['exist'] = exist;
        return this;
    }
    public withWorkspaces(workspaces: Array<string>): ListCloudLogResourcesResponse {
        this['workspaces'] = workspaces;
        return this;
    }
}