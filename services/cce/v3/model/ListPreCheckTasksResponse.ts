import { Metadata } from './Metadata';
import { PrecheckClusterTask } from './PrecheckClusterTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPreCheckTasksResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: Metadata;
    public items?: Array<PrecheckClusterTask>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListPreCheckTasksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListPreCheckTasksResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): ListPreCheckTasksResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<PrecheckClusterTask>): ListPreCheckTasksResponse {
        this['items'] = items;
        return this;
    }
}