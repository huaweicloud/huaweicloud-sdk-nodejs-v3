

export class PermissionSetDto {
    private 'created_date'?: number;
    public description?: string;
    public name?: string;
    private 'permission_set_id'?: string;
    private 'relay_state'?: string;
    private 'session_duration'?: string;
    private 'permission_urn'?: string;
    public constructor() { 
    }
    public withCreatedDate(createdDate: number): PermissionSetDto {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withDescription(description: string): PermissionSetDto {
        this['description'] = description;
        return this;
    }
    public withName(name: string): PermissionSetDto {
        this['name'] = name;
        return this;
    }
    public withPermissionSetId(permissionSetId: string): PermissionSetDto {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withRelayState(relayState: string): PermissionSetDto {
        this['relay_state'] = relayState;
        return this;
    }
    public set relayState(relayState: string  | undefined) {
        this['relay_state'] = relayState;
    }
    public get relayState(): string | undefined {
        return this['relay_state'];
    }
    public withSessionDuration(sessionDuration: string): PermissionSetDto {
        this['session_duration'] = sessionDuration;
        return this;
    }
    public set sessionDuration(sessionDuration: string  | undefined) {
        this['session_duration'] = sessionDuration;
    }
    public get sessionDuration(): string | undefined {
        return this['session_duration'];
    }
    public withPermissionUrn(permissionUrn: string): PermissionSetDto {
        this['permission_urn'] = permissionUrn;
        return this;
    }
    public set permissionUrn(permissionUrn: string  | undefined) {
        this['permission_urn'] = permissionUrn;
    }
    public get permissionUrn(): string | undefined {
        return this['permission_urn'];
    }
}