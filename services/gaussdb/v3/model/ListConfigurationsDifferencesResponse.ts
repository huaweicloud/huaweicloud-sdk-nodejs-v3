import { ParamGroupParameterDifferences } from './ParamGroupParameterDifferences';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsDifferencesResponse extends SdkResponse {
    public differences?: Array<ParamGroupParameterDifferences>;
    public constructor() { 
        super();
    }
    public withDifferences(differences: Array<ParamGroupParameterDifferences>): ListConfigurationsDifferencesResponse {
        this['differences'] = differences;
        return this;
    }
}