import { FeatureStatus } from './FeatureStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetFeatureStatusV5Response extends SdkResponse {
    private 'feature_status'?: FeatureStatus;
    public constructor() { 
        super();
    }
    public withFeatureStatus(featureStatus: FeatureStatus): GetFeatureStatusV5Response {
        this['feature_status'] = featureStatus;
        return this;
    }
    public set featureStatus(featureStatus: FeatureStatus  | undefined) {
        this['feature_status'] = featureStatus;
    }
    public get featureStatus(): FeatureStatus | undefined {
        return this['feature_status'];
    }
}