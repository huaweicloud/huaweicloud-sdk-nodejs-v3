import { ListDiffDetailsResult } from './ListDiffDetailsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsDiffResponse extends SdkResponse {
    public differences?: Array<ListDiffDetailsResult>;
    public constructor() { 
        super();
    }
    public withDifferences(differences: Array<ListDiffDetailsResult>): ListConfigurationsDiffResponse {
        this['differences'] = differences;
        return this;
    }
}