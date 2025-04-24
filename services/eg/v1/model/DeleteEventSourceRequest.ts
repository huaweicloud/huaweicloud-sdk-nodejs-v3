

export class DeleteEventSourceRequest {
    private 'source_id'?: string;
    public constructor(sourceId?: string) { 
        this['source_id'] = sourceId;
    }
    public withSourceId(sourceId: string): DeleteEventSourceRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
}