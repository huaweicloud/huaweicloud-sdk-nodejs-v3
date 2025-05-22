

export class ShowBuildRecordFullStagesRequest {
    private 'record_id'?: string;
    public cascade?: boolean;
    public constructor(recordId?: string) { 
        this['record_id'] = recordId;
    }
    public withRecordId(recordId: string): ShowBuildRecordFullStagesRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withCascade(cascade: boolean): ShowBuildRecordFullStagesRequest {
        this['cascade'] = cascade;
        return this;
    }
}