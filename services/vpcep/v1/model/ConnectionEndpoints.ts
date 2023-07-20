import { QueryError } from './QueryError';


export class ConnectionEndpoints {
    public id?: string;
    private 'marker_id'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'domain_id'?: string;
    public error?: Array<QueryError>;
    public status?: ConnectionEndpointsStatusEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ConnectionEndpoints {
        this['id'] = id;
        return this;
    }
    public withMarkerId(markerId: number): ConnectionEndpoints {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): number | undefined {
        return this['marker_id'];
    }
    public withCreatedAt(createdAt: string): ConnectionEndpoints {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ConnectionEndpoints {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): ConnectionEndpoints {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withError(error: Array<QueryError>): ConnectionEndpoints {
        this['error'] = error;
        return this;
    }
    public withStatus(status: ConnectionEndpointsStatusEnum | string): ConnectionEndpoints {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ConnectionEndpoints {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConnectionEndpointsStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    CREATING = 'creating',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed',
    DELETING = 'deleting'
}
