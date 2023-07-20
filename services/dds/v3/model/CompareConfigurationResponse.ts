import { DiffDetails } from './DiffDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareConfigurationResponse extends SdkResponse {
    public differences?: Array<DiffDetails>;
    public constructor() { 
        super();
    }
    public withDifferences(differences: Array<DiffDetails>): CompareConfigurationResponse {
        this['differences'] = differences;
        return this;
    }
}