import { AddFlowControlPolicy } from './AddFlowControlPolicy';


export class CreateRoutingFlowControlPolicyRequest {
    private 'Instance-Id'?: string;
    public body?: AddFlowControlPolicy;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateRoutingFlowControlPolicyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddFlowControlPolicy): CreateRoutingFlowControlPolicyRequest {
        this['body'] = body;
        return this;
    }
}