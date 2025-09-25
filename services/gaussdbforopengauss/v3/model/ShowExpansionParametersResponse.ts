import { ExpansionParameterResult } from './ExpansionParameterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExpansionParametersResponse extends SdkResponse {
    private 'expansion_parameters'?: Array<ExpansionParameterResult>;
    public constructor() { 
        super();
    }
    public withExpansionParameters(expansionParameters: Array<ExpansionParameterResult>): ShowExpansionParametersResponse {
        this['expansion_parameters'] = expansionParameters;
        return this;
    }
    public set expansionParameters(expansionParameters: Array<ExpansionParameterResult>  | undefined) {
        this['expansion_parameters'] = expansionParameters;
    }
    public get expansionParameters(): Array<ExpansionParameterResult> | undefined {
        return this['expansion_parameters'];
    }
}