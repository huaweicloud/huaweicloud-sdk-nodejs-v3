

export class CreateWorkspaceParams {
    private 'bad_record_location_name'?: string;
    public description?: string;
    private 'eps_id'?: string;
    private 'job_log_location_name'?: string;
    public name?: string;
    public constructor(epsId?: string, name?: string) { 
        this['eps_id'] = epsId;
        this['name'] = name;
    }
    public withBadRecordLocationName(badRecordLocationName: string): CreateWorkspaceParams {
        this['bad_record_location_name'] = badRecordLocationName;
        return this;
    }
    public set badRecordLocationName(badRecordLocationName: string  | undefined) {
        this['bad_record_location_name'] = badRecordLocationName;
    }
    public get badRecordLocationName(): string | undefined {
        return this['bad_record_location_name'];
    }
    public withDescription(description: string): CreateWorkspaceParams {
        this['description'] = description;
        return this;
    }
    public withEpsId(epsId: string): CreateWorkspaceParams {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withJobLogLocationName(jobLogLocationName: string): CreateWorkspaceParams {
        this['job_log_location_name'] = jobLogLocationName;
        return this;
    }
    public set jobLogLocationName(jobLogLocationName: string  | undefined) {
        this['job_log_location_name'] = jobLogLocationName;
    }
    public get jobLogLocationName(): string | undefined {
        return this['job_log_location_name'];
    }
    public withName(name: string): CreateWorkspaceParams {
        this['name'] = name;
        return this;
    }
}