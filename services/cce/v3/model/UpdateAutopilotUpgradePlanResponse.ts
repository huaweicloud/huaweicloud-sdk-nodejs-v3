import { Metadata } from './Metadata';
import { UpgradePlanSpec } from './UpgradePlanSpec';
import { UpgradePlanStatus } from './UpgradePlanStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAutopilotUpgradePlanResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: UpgradePlanSpec;
    public status?: UpgradePlanStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpdateAutopilotUpgradePlanResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdateAutopilotUpgradePlanResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): UpdateAutopilotUpgradePlanResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradePlanSpec): UpdateAutopilotUpgradePlanResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UpgradePlanStatus): UpdateAutopilotUpgradePlanResponse {
        this['status'] = status;
        return this;
    }
}