

export class ListAccountAssignmentCreationStatusRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public status?: ListAccountAssignmentCreationStatusRequestStatusEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListAccountAssignmentCreationStatusRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListAccountAssignmentCreationStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: ListAccountAssignmentCreationStatusRequestStatusEnum | string): ListAccountAssignmentCreationStatusRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListAccountAssignmentCreationStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountAssignmentCreationStatusRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAccountAssignmentCreationStatusRequestStatusEnum {
    IN_PROGRESS = 'IN_PROGRESS',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}
