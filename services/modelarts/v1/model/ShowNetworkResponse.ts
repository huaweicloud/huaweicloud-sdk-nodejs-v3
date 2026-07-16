import { NetworkMetadata } from './NetworkMetadata';
import { NetworkSpec } from './NetworkSpec';
import { NetworkStatus } from './NetworkStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNetworkResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NetworkMetadata;
    public spec?: NetworkSpec;
    public status?: NetworkStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowNetworkResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowNetworkResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NetworkMetadata): ShowNetworkResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NetworkSpec): ShowNetworkResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NetworkStatus): ShowNetworkResponse {
        this['status'] = status;
        return this;
    }
}