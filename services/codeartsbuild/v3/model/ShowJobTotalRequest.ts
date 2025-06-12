

export class ShowJobTotalRequest {
    private 'build_project_id'?: string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public constructor(buildProjectId?: string) { 
        this['build_project_id'] = buildProjectId;
    }
    public withBuildProjectId(buildProjectId: string): ShowJobTotalRequest {
        this['build_project_id'] = buildProjectId;
        return this;
    }
    public set buildProjectId(buildProjectId: string  | undefined) {
        this['build_project_id'] = buildProjectId;
    }
    public get buildProjectId(): string | undefined {
        return this['build_project_id'];
    }
    public withFromDate(fromDate: string): ShowJobTotalRequest {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): ShowJobTotalRequest {
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