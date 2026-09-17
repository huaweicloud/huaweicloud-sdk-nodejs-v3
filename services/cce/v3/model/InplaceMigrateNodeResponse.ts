import { InPlaceMigratetoNodesSpec } from './InPlaceMigratetoNodesSpec';
import { TaskStatus } from './TaskStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InplaceMigrateNodeResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public spec?: InPlaceMigratetoNodesSpec;
    public status?: TaskStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): InplaceMigrateNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): InplaceMigrateNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: InPlaceMigratetoNodesSpec): InplaceMigrateNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: TaskStatus): InplaceMigrateNodeResponse {
        this['status'] = status;
        return this;
    }
}