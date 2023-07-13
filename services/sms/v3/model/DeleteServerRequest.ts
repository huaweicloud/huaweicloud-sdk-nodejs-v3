

export class DeleteServerRequest {
    private 'source_id': string | undefined;
    public constructor(sourceId?: any) { 
        this['source_id'] = sourceId;
    }
    public withSourceId(sourceId: string): DeleteServerRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
}