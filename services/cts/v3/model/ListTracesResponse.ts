import { MetaData } from './MetaData';
import { Traces } from './Traces';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTracesResponse extends SdkResponse {
    public traces?: Array<Traces>;
    private 'meta_data'?: MetaData;
    public constructor() { 
        super();
    }
    public withTraces(traces: Array<Traces>): ListTracesResponse {
        this['traces'] = traces;
        return this;
    }
    public withMetaData(metaData: MetaData): ListTracesResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
    }
}