import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskSpec } from './UpgradeTaskSpec';
import { UpgradeTaskStatus } from './UpgradeTaskStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotUpgradeClusterTaskResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: UpgradeTaskMetadata;
    public spec?: UpgradeTaskSpec;
    public status?: UpgradeTaskStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowAutopilotUpgradeClusterTaskResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowAutopilotUpgradeClusterTaskResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: UpgradeTaskMetadata): ShowAutopilotUpgradeClusterTaskResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeTaskSpec): ShowAutopilotUpgradeClusterTaskResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UpgradeTaskStatus): ShowAutopilotUpgradeClusterTaskResponse {
        this['status'] = status;
        return this;
    }
}