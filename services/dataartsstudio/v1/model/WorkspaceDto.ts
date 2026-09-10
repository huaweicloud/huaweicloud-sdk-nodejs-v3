

export class WorkspaceDto {
    private 'bad_record_location_name'?: string;
    public description?: string;
    private 'job_log_location_name'?: string;
    public name?: string;
    private 'eps_id'?: string;
    public mode?: string;
    public status?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withBadRecordLocationName(badRecordLocationName: string): WorkspaceDto {
        this['bad_record_location_name'] = badRecordLocationName;
        return this;
    }
    public set badRecordLocationName(badRecordLocationName: string  | undefined) {
        this['bad_record_location_name'] = badRecordLocationName;
    }
    public get badRecordLocationName(): string | undefined {
        return this['bad_record_location_name'];
    }
    public withDescription(description: string): WorkspaceDto {
        this['description'] = description;
        return this;
    }
    public withJobLogLocationName(jobLogLocationName: string): WorkspaceDto {
        this['job_log_location_name'] = jobLogLocationName;
        return this;
    }
    public set jobLogLocationName(jobLogLocationName: string  | undefined) {
        this['job_log_location_name'] = jobLogLocationName;
    }
    public get jobLogLocationName(): string | undefined {
        return this['job_log_location_name'];
    }
    public withName(name: string): WorkspaceDto {
        this['name'] = name;
        return this;
    }
    public withEpsId(epsId: string): WorkspaceDto {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withMode(mode: string): WorkspaceDto {
        this['mode'] = mode;
        return this;
    }
    public withStatus(status: string): WorkspaceDto {
        this['status'] = status;
        return this;
    }
}