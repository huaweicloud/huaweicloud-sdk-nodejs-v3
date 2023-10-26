import { MetaDataSeries } from './MetaDataSeries';
import { SeriesQueryItemResult } from './SeriesQueryItemResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSeriesResponse extends SdkResponse {
    public series?: Array<SeriesQueryItemResult>;
    private 'meta_data'?: MetaDataSeries;
    public constructor() { 
        super();
    }
    public withSeries(series: Array<SeriesQueryItemResult>): ListSeriesResponse {
        this['series'] = series;
        return this;
    }
    public withMetaData(metaData: MetaDataSeries): ListSeriesResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaDataSeries  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaDataSeries | undefined {
        return this['meta_data'];
    }
}