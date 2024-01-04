import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskResponseBody } from './UpgradeTaskResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpgradeClusterTasksResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: UpgradeTaskMetadata;
    public items?: Array<UpgradeTaskResponseBody>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListUpgradeClusterTasksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListUpgradeClusterTasksResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: UpgradeTaskMetadata): ListUpgradeClusterTasksResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<UpgradeTaskResponseBody>): ListUpgradeClusterTasksResponse {
        this['items'] = items;
        return this;
    }
}