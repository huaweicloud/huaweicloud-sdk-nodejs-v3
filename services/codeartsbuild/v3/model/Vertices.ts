

export class Vertices {
    public id?: string;
    public status?: string;
    private 'display_name'?: string;
    private 'build_duration'?: number;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    private 'build_no'?: string;
    public constructor() { 
    }
    public withId(id: string): Vertices {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): Vertices {
        this['status'] = status;
        return this;
    }
    public withDisplayName(displayName: string): Vertices {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withBuildDuration(buildDuration: number): Vertices {
        this['build_duration'] = buildDuration;
        return this;
    }
    public set buildDuration(buildDuration: number  | undefined) {
        this['build_duration'] = buildDuration;
    }
    public get buildDuration(): number | undefined {
        return this['build_duration'];
    }
    public withStartTime(startTime: string): Vertices {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): Vertices {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withBuildNo(buildNo: string): Vertices {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: string  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): string | undefined {
        return this['build_no'];
    }
}