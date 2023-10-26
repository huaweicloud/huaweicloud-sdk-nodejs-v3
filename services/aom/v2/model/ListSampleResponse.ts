import { SampleDataValue } from './SampleDataValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSampleResponse extends SdkResponse {
    public samples?: Array<SampleDataValue>;
    public constructor() { 
        super();
    }
    public withSamples(samples: Array<SampleDataValue>): ListSampleResponse {
        this['samples'] = samples;
        return this;
    }
}