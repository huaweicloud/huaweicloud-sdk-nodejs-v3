import { SetAutoPolicyErrorResults } from './SetAutoPolicyErrorResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAutoEnlargePolicyResponse extends SdkResponse {
    private 'error_results'?: Array<SetAutoPolicyErrorResults>;
    public constructor() { 
        super();
    }
    public withErrorResults(errorResults: Array<SetAutoPolicyErrorResults>): SetAutoEnlargePolicyResponse {
        this['error_results'] = errorResults;
        return this;
    }
    public set errorResults(errorResults: Array<SetAutoPolicyErrorResults>  | undefined) {
        this['error_results'] = errorResults;
    }
    public get errorResults(): Array<SetAutoPolicyErrorResults> | undefined {
        return this['error_results'];
    }
}