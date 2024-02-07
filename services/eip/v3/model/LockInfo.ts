

export class LockInfo {
    public id?: string;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    public scene?: string;
    private 'source_type'?: string;
    private 'source_id'?: string;
    private 'check_url'?: string;
    public action?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): LockInfo {
        this['id'] = id;
        return this;
    }
    public withResourceType(resourceType: string): LockInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): LockInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withScene(scene: string): LockInfo {
        this['scene'] = scene;
        return this;
    }
    public withSourceType(sourceType: string): LockInfo {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourceId(sourceId: string): LockInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withCheckUrl(checkUrl: string): LockInfo {
        this['check_url'] = checkUrl;
        return this;
    }
    public set checkUrl(checkUrl: string  | undefined) {
        this['check_url'] = checkUrl;
    }
    public get checkUrl(): string | undefined {
        return this['check_url'];
    }
    public withAction(action: string): LockInfo {
        this['action'] = action;
        return this;
    }
    public withCreatedAt(createdAt: Date): LockInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): LockInfo {
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