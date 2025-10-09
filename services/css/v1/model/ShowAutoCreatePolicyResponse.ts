
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoCreatePolicyResponse extends SdkResponse {
    public keepday?: number;
    public period?: string;
    public frequency?: string;
    public prefix?: string;
    public bucket?: string;
    public basePath?: string;
    public agency?: string;
    public enable?: string;
    public indices?: string;
    public snapshotCmkId?: string;
    public maxSnapshotBytesPerSeconds?: string;
    public maxRestoreBytesPerSeconds?: string;
    public constructor() { 
        super();
    }
    public withKeepday(keepday: number): ShowAutoCreatePolicyResponse {
        this['keepday'] = keepday;
        return this;
    }
    public withPeriod(period: string): ShowAutoCreatePolicyResponse {
        this['period'] = period;
        return this;
    }
    public withFrequency(frequency: string): ShowAutoCreatePolicyResponse {
        this['frequency'] = frequency;
        return this;
    }
    public withPrefix(prefix: string): ShowAutoCreatePolicyResponse {
        this['prefix'] = prefix;
        return this;
    }
    public withBucket(bucket: string): ShowAutoCreatePolicyResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withBasePath(basePath: string): ShowAutoCreatePolicyResponse {
        this['basePath'] = basePath;
        return this;
    }
    public withAgency(agency: string): ShowAutoCreatePolicyResponse {
        this['agency'] = agency;
        return this;
    }
    public withEnable(enable: string): ShowAutoCreatePolicyResponse {
        this['enable'] = enable;
        return this;
    }
    public withIndices(indices: string): ShowAutoCreatePolicyResponse {
        this['indices'] = indices;
        return this;
    }
    public withSnapshotCmkId(snapshotCmkId: string): ShowAutoCreatePolicyResponse {
        this['snapshotCmkId'] = snapshotCmkId;
        return this;
    }
    public withMaxSnapshotBytesPerSeconds(maxSnapshotBytesPerSeconds: string): ShowAutoCreatePolicyResponse {
        this['maxSnapshotBytesPerSeconds'] = maxSnapshotBytesPerSeconds;
        return this;
    }
    public withMaxRestoreBytesPerSeconds(maxRestoreBytesPerSeconds: string): ShowAutoCreatePolicyResponse {
        this['maxRestoreBytesPerSeconds'] = maxRestoreBytesPerSeconds;
        return this;
    }
}