
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGaussMySqlReadonlyNodeResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'node_names'?: Array<string>;
    private 'job_id'?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): CreateGaussMySqlReadonlyNodeResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeNames(nodeNames: Array<string>): CreateGaussMySqlReadonlyNodeResponse {
        this['node_names'] = nodeNames;
        return this;
    }
    public set nodeNames(nodeNames: Array<string>  | undefined) {
        this['node_names'] = nodeNames;
    }
    public get nodeNames(): Array<string> | undefined {
        return this['node_names'];
    }
    public withJobId(jobId: string): CreateGaussMySqlReadonlyNodeResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): CreateGaussMySqlReadonlyNodeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}