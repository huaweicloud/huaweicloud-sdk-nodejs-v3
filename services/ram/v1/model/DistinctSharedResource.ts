

export class DistinctSharedResource {
    private 'resource_urn'?: string;
    private 'resource_type'?: string;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withResourceUrn(resourceUrn: string): DistinctSharedResource {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
    public withResourceType(resourceType: string): DistinctSharedResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withUpdatedAt(updatedAt: Date): DistinctSharedResource {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}