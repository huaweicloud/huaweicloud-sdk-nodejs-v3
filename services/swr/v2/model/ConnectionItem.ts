

export class ConnectionItem {
    public id?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public status?: ConnectionItemStatusEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'protected'?: boolean;
    public constructor() { 
    }
    public withId(id: string): ConnectionItem {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): ConnectionItem {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): ConnectionItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: ConnectionItemStatusEnum | string): ConnectionItem {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): ConnectionItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ConnectionItem {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withProtected(_protected: boolean): ConnectionItem {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConnectionItemStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    CREATING = 'creating',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed',
    DELETING = 'deleting'
}
