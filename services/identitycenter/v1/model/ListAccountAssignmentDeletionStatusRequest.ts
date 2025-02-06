

export class ListAccountAssignmentDeletionStatusRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public status?: ListAccountAssignmentDeletionStatusRequestStatusEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListAccountAssignmentDeletionStatusRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListAccountAssignmentDeletionStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: ListAccountAssignmentDeletionStatusRequestStatusEnum | string): ListAccountAssignmentDeletionStatusRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListAccountAssignmentDeletionStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountAssignmentDeletionStatusRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAccountAssignmentDeletionStatusRequestStatusEnum {
    IN_PROGRESS = 'IN_PROGRESS',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}
