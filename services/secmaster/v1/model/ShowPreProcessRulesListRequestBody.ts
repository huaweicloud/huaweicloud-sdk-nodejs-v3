

export class ShowPreProcessRulesListRequestBody {
    private 'mapper_ids'?: Array<string>;
    public name?: string;
    private 'mapping_id'?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public offset?: number;
    public limit?: number;
    public constructor(mappingId?: string, offset?: number, limit?: number) { 
        this['mapping_id'] = mappingId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withMapperIds(mapperIds: Array<string>): ShowPreProcessRulesListRequestBody {
        this['mapper_ids'] = mapperIds;
        return this;
    }
    public set mapperIds(mapperIds: Array<string>  | undefined) {
        this['mapper_ids'] = mapperIds;
    }
    public get mapperIds(): Array<string> | undefined {
        return this['mapper_ids'];
    }
    public withName(name: string): ShowPreProcessRulesListRequestBody {
        this['name'] = name;
        return this;
    }
    public withMappingId(mappingId: string): ShowPreProcessRulesListRequestBody {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withStartTime(startTime: Date): ShowPreProcessRulesListRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ShowPreProcessRulesListRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ShowPreProcessRulesListRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowPreProcessRulesListRequestBody {
        this['limit'] = limit;
        return this;
    }
}