

export class ListRecordsRequest {
    private 'build_project_id'?: string;
    public page?: number;
    public limit?: number;
    public triggers?: Array<string>;
    public branches?: Array<string>;
    public tags?: Array<string>;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public constructor(buildProjectId?: string) { 
        this['build_project_id'] = buildProjectId;
    }
    public withBuildProjectId(buildProjectId: string): ListRecordsRequest {
        this['build_project_id'] = buildProjectId;
        return this;
    }
    public set buildProjectId(buildProjectId: string  | undefined) {
        this['build_project_id'] = buildProjectId;
    }
    public get buildProjectId(): string | undefined {
        return this['build_project_id'];
    }
    public withPage(page: number): ListRecordsRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withTriggers(triggers: Array<string>): ListRecordsRequest {
        this['triggers'] = triggers;
        return this;
    }
    public withBranches(branches: Array<string>): ListRecordsRequest {
        this['branches'] = branches;
        return this;
    }
    public withTags(tags: Array<string>): ListRecordsRequest {
        this['tags'] = tags;
        return this;
    }
    public withFromDate(fromDate: string): ListRecordsRequest {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): ListRecordsRequest {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
}