import { NetworkMetadata } from './NetworkMetadata';
import { NetworkSpec } from './NetworkSpec';
import { NetworkStatus } from './NetworkStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNetworkResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NetworkMetadata;
    public spec?: NetworkSpec;
    public status?: NetworkStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateNetworkResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreateNetworkResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NetworkMetadata): CreateNetworkResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NetworkSpec): CreateNetworkResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NetworkStatus): CreateNetworkResponse {
        this['status'] = status;
        return this;
    }
}