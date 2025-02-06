

export class DescribeAccountAssignmentCreationStatusRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'request_id'?: string;
    public constructor(instanceId?: string, requestId?: string) { 
        this['instance_id'] = instanceId;
        this['request_id'] = requestId;
    }
    public withXSecurityToken(xSecurityToken: string): DescribeAccountAssignmentCreationStatusRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): DescribeAccountAssignmentCreationStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRequestId(requestId: string): DescribeAccountAssignmentCreationStatusRequest {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}