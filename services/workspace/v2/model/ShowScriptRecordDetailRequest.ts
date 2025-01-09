

export class ShowScriptRecordDetailRequest {
    private 'record_id'?: string;
    public constructor(recordId?: string) { 
        this['record_id'] = recordId;
    }
    public withRecordId(recordId: string): ShowScriptRecordDetailRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
}