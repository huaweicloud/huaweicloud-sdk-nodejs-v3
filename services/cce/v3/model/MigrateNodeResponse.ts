import { MigrateNodesSpec } from './MigrateNodesSpec';
import { TaskStatus } from './TaskStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MigrateNodeResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public spec?: MigrateNodesSpec;
    public status?: TaskStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): MigrateNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): MigrateNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: MigrateNodesSpec): MigrateNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: TaskStatus): MigrateNodeResponse {
        this['status'] = status;
        return this;
    }
}