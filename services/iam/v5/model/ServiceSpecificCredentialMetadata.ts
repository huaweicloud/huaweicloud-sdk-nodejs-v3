

export class ServiceSpecificCredentialMetadata {
    private 'created_at'?: Date;
    private 'service_name'?: string;
    private 'credential_id'?: string;
    public status?: ServiceSpecificCredentialMetadataStatusEnum | string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'expires_at'?: Date;
    private 'credential_mask'?: string;
    public description?: string;
    public constructor(createdAt?: Date, serviceName?: string, credentialId?: string, status?: string, userId?: string, userName?: string, credentialMask?: string, description?: string) { 
        this['created_at'] = createdAt;
        this['service_name'] = serviceName;
        this['credential_id'] = credentialId;
        this['status'] = status;
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['credential_mask'] = credentialMask;
        this['description'] = description;
    }
    public withCreatedAt(createdAt: Date): ServiceSpecificCredentialMetadata {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withServiceName(serviceName: string): ServiceSpecificCredentialMetadata {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withCredentialId(credentialId: string): ServiceSpecificCredentialMetadata {
        this['credential_id'] = credentialId;
        return this;
    }
    public set credentialId(credentialId: string  | undefined) {
        this['credential_id'] = credentialId;
    }
    public get credentialId(): string | undefined {
        return this['credential_id'];
    }
    public withStatus(status: ServiceSpecificCredentialMetadataStatusEnum | string): ServiceSpecificCredentialMetadata {
        this['status'] = status;
        return this;
    }
    public withUserId(userId: string): ServiceSpecificCredentialMetadata {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ServiceSpecificCredentialMetadata {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withExpiresAt(expiresAt: Date): ServiceSpecificCredentialMetadata {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: Date  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): Date | undefined {
        return this['expires_at'];
    }
    public withCredentialMask(credentialMask: string): ServiceSpecificCredentialMetadata {
        this['credential_mask'] = credentialMask;
        return this;
    }
    public set credentialMask(credentialMask: string  | undefined) {
        this['credential_mask'] = credentialMask;
    }
    public get credentialMask(): string | undefined {
        return this['credential_mask'];
    }
    public withDescription(description: string): ServiceSpecificCredentialMetadata {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServiceSpecificCredentialMetadataStatusEnum {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    EXPIRED = 'expired'
}
