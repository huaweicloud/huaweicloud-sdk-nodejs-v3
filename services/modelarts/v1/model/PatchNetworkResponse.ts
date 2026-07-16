import { NetworkMetadata } from './NetworkMetadata';
import { NetworkSpec } from './NetworkSpec';
import { NetworkStatus } from './NetworkStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PatchNetworkResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NetworkMetadata;
    public spec?: NetworkSpec;
    public status?: NetworkStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): PatchNetworkResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PatchNetworkResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NetworkMetadata): PatchNetworkResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NetworkSpec): PatchNetworkResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NetworkStatus): PatchNetworkResponse {
        this['status'] = status;
        return this;
    }
}