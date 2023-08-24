

export class EndpointConnection {
    public id?: string;
    private 'marker_id'?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'domain_id'?: string;
    public status?: EndpointConnectionStatusEnum | string;
    public constructor(id?: string, markerId?: number, createdAt?: Date, updatedAt?: Date, domainId?: string, status?: string) { 
        this['id'] = id;
        this['marker_id'] = markerId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['domain_id'] = domainId;
        this['status'] = status;
    }
    public withId(id: string): EndpointConnection {
        this['id'] = id;
        return this;
    }
    public withMarkerId(markerId: number): EndpointConnection {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): number | undefined {
        return this['marker_id'];
    }
    public withCreatedAt(createdAt: Date): EndpointConnection {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EndpointConnection {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): EndpointConnection {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStatus(status: EndpointConnectionStatusEnum | string): EndpointConnection {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointConnectionStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    CREATING = 'creating',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed',
    DELETING = 'deleting'
}
