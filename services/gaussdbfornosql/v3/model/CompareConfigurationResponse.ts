import { DifferentDetails } from './DifferentDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareConfigurationResponse extends SdkResponse {
    public differences?: Array<DifferentDetails>;
    public constructor() { 
        super();
    }
    public withDifferences(differences: Array<DifferentDetails>): CompareConfigurationResponse {
        this['differences'] = differences;
        return this;
    }
}