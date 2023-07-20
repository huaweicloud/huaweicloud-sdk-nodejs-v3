
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachInternalIpResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'node_id'?: string;
    private 'new_ip'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): AttachInternalIpResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withNodeId(nodeId: string): AttachInternalIpResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNewIp(newIp: string): AttachInternalIpResponse {
        this['new_ip'] = newIp;
        return this;
    }
    public set newIp(newIp: string  | undefined) {
        this['new_ip'] = newIp;
    }
    public get newIp(): string | undefined {
        return this['new_ip'];
    }
}