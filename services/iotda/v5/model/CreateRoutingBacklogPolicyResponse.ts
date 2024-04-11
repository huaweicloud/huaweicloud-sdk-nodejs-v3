
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRoutingBacklogPolicyResponse extends SdkResponse {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public description?: string;
    private 'backlog_size'?: number;
    private 'backlog_time'?: number;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): CreateRoutingBacklogPolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): CreateRoutingBacklogPolicyResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withDescription(description: string): CreateRoutingBacklogPolicyResponse {
        this['description'] = description;
        return this;
    }
    public withBacklogSize(backlogSize: number): CreateRoutingBacklogPolicyResponse {
        this['backlog_size'] = backlogSize;
        return this;
    }
    public set backlogSize(backlogSize: number  | undefined) {
        this['backlog_size'] = backlogSize;
    }
    public get backlogSize(): number | undefined {
        return this['backlog_size'];
    }
    public withBacklogTime(backlogTime: number): CreateRoutingBacklogPolicyResponse {
        this['backlog_time'] = backlogTime;
        return this;
    }
    public set backlogTime(backlogTime: number  | undefined) {
        this['backlog_time'] = backlogTime;
    }
    public get backlogTime(): number | undefined {
        return this['backlog_time'];
    }
}