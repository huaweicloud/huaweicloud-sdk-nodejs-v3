import { RedistributionParameterResult } from './RedistributionParameterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedistributionParametersResponse extends SdkResponse {
    private 'expansion_parameters'?: Array<RedistributionParameterResult>;
    public constructor() { 
        super();
    }
    public withExpansionParameters(expansionParameters: Array<RedistributionParameterResult>): ShowRedistributionParametersResponse {
        this['expansion_parameters'] = expansionParameters;
        return this;
    }
    public set expansionParameters(expansionParameters: Array<RedistributionParameterResult>  | undefined) {
        this['expansion_parameters'] = expansionParameters;
    }
    public get expansionParameters(): Array<RedistributionParameterResult> | undefined {
        return this['expansion_parameters'];
    }
}