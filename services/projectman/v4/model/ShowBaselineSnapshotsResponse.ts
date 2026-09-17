import { FeatureSetOpenApiVO } from './FeatureSetOpenApiVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaselineSnapshotsResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: Array<FeatureSetOpenApiVO>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowBaselineSnapshotsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowBaselineSnapshotsResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<FeatureSetOpenApiVO>): ShowBaselineSnapshotsResponse {
        this['result'] = result;
        return this;
    }
}