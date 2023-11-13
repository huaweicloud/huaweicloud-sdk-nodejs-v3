import { Item } from './Item';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDiagnosisTaskResponse extends SdkResponse {
    public results?: Array<Item>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<Item>): DeleteDiagnosisTaskResponse {
        this['results'] = results;
        return this;
    }
}