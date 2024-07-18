import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskResponseBody } from './UpgradeTaskResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotUpgradeClusterTasksResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: UpgradeTaskMetadata;
    public items?: Array<UpgradeTaskResponseBody>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListAutopilotUpgradeClusterTasksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListAutopilotUpgradeClusterTasksResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: UpgradeTaskMetadata): ListAutopilotUpgradeClusterTasksResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<UpgradeTaskResponseBody>): ListAutopilotUpgradeClusterTasksResponse {
        this['items'] = items;
        return this;
    }
}