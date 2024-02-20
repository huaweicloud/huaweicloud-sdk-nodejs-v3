

export class ShowFindingRequest {
    private 'analyzer_id'?: string;
    private 'finding_id'?: string;
    public constructor(analyzerId?: string, findingId?: string) { 
        this['analyzer_id'] = analyzerId;
        this['finding_id'] = findingId;
    }
    public withAnalyzerId(analyzerId: string): ShowFindingRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withFindingId(findingId: string): ShowFindingRequest {
        this['finding_id'] = findingId;
        return this;
    }
    public set findingId(findingId: string  | undefined) {
        this['finding_id'] = findingId;
    }
    public get findingId(): string | undefined {
        return this['finding_id'];
    }
}