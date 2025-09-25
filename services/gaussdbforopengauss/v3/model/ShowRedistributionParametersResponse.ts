import { RedistributionParameterResult } from './RedistributionParameterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedistributionParametersResponse extends SdkResponse {
    private 'redistribution_parameters'?: Array<RedistributionParameterResult>;
    public constructor() { 
        super();
    }
    public withRedistributionParameters(redistributionParameters: Array<RedistributionParameterResult>): ShowRedistributionParametersResponse {
        this['redistribution_parameters'] = redistributionParameters;
        return this;
    }
    public set redistributionParameters(redistributionParameters: Array<RedistributionParameterResult>  | undefined) {
        this['redistribution_parameters'] = redistributionParameters;
    }
    public get redistributionParameters(): Array<RedistributionParameterResult> | undefined {
        return this['redistribution_parameters'];
    }
}