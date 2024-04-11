import { AddBacklogPolicy } from './AddBacklogPolicy';


export class CreateRoutingBacklogPolicyRequest {
    private 'Instance-Id'?: string;
    public body?: AddBacklogPolicy;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateRoutingBacklogPolicyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddBacklogPolicy): CreateRoutingBacklogPolicyRequest {
        this['body'] = body;
        return this;
    }
}