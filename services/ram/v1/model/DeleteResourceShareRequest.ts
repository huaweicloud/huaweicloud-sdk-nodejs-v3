

export class DeleteResourceShareRequest {
    private 'resource_share_id'?: string;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withResourceShareId(resourceShareId: string): DeleteResourceShareRequest {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
}