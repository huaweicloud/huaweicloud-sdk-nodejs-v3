

export class ListExecutionsRequest {
    public limit?: number;
    public offset?: number;
    public creator?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'document_name'?: string;
    private 'document_id'?: string;
    public tags?: string;
    private 'exclude_child_executions'?: boolean;
    public constructor() { 
    }
    public withLimit(limit: number): ListExecutionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListExecutionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCreator(creator: string): ListExecutionsRequest {
        this['creator'] = creator;
        return this;
    }
    public withStartTime(startTime: number): ListExecutionsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListExecutionsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDocumentName(documentName: string): ListExecutionsRequest {
        this['document_name'] = documentName;
        return this;
    }
    public set documentName(documentName: string  | undefined) {
        this['document_name'] = documentName;
    }
    public get documentName(): string | undefined {
        return this['document_name'];
    }
    public withDocumentId(documentId: string): ListExecutionsRequest {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withTags(tags: string): ListExecutionsRequest {
        this['tags'] = tags;
        return this;
    }
    public withExcludeChildExecutions(excludeChildExecutions: boolean): ListExecutionsRequest {
        this['exclude_child_executions'] = excludeChildExecutions;
        return this;
    }
    public set excludeChildExecutions(excludeChildExecutions: boolean  | undefined) {
        this['exclude_child_executions'] = excludeChildExecutions;
    }
    public get excludeChildExecutions(): boolean | undefined {
        return this['exclude_child_executions'];
    }
}