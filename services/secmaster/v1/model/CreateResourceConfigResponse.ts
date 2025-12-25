import { DatasetItem } from './DatasetItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateResourceConfigResponse extends SdkResponse {
    public datasets?: Array<DatasetItem>;
    public constructor() { 
        super();
    }
    public withDatasets(datasets: Array<DatasetItem>): CreateResourceConfigResponse {
        this['datasets'] = datasets;
        return this;
    }
}