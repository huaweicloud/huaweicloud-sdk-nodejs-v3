import { Metadata } from './Metadata';
import { PrecheckClusterTask } from './PrecheckClusterTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotPreCheckTasksResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: Metadata;
    public items?: Array<PrecheckClusterTask>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListAutopilotPreCheckTasksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListAutopilotPreCheckTasksResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): ListAutopilotPreCheckTasksResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<PrecheckClusterTask>): ListAutopilotPreCheckTasksResponse {
        this['items'] = items;
        return this;
    }
}