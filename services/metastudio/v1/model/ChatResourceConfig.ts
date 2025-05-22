

export class ChatResourceConfig {
    private 'resource_id'?: string;
    private 'count_resource'?: number;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ChatResourceConfig {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withCountResource(countResource: number): ChatResourceConfig {
        this['count_resource'] = countResource;
        return this;
    }
    public set countResource(countResource: number  | undefined) {
        this['count_resource'] = countResource;
    }
    public get countResource(): number | undefined {
        return this['count_resource'];
    }
}