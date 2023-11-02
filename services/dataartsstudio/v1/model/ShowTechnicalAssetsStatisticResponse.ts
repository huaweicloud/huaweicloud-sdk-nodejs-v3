import { DataSource } from './DataSource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTechnicalAssetsStatisticResponse extends SdkResponse {
    public count?: number;
    private 'datasource_statistics'?: Array<DataSource>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowTechnicalAssetsStatisticResponse {
        this['count'] = count;
        return this;
    }
    public withDatasourceStatistics(datasourceStatistics: Array<DataSource>): ShowTechnicalAssetsStatisticResponse {
        this['datasource_statistics'] = datasourceStatistics;
        return this;
    }
    public set datasourceStatistics(datasourceStatistics: Array<DataSource>  | undefined) {
        this['datasource_statistics'] = datasourceStatistics;
    }
    public get datasourceStatistics(): Array<DataSource> | undefined {
        return this['datasource_statistics'];
    }
}