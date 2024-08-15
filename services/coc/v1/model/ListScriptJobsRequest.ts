

export class ListScriptJobsRequest {
    public limit?: number;
    public marker?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public creator?: string;
    public status?: ListScriptJobsRequestStatusEnum | string;
    private 'X-Language'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListScriptJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: number): ListScriptJobsRequest {
        this['marker'] = marker;
        return this;
    }
    public withStartTime(startTime: number): ListScriptJobsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListScriptJobsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCreator(creator: string): ListScriptJobsRequest {
        this['creator'] = creator;
        return this;
    }
    public withStatus(status: ListScriptJobsRequestStatusEnum | string): ListScriptJobsRequest {
        this['status'] = status;
        return this;
    }
    public withXLanguage(xLanguage: string): ListScriptJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withXProjectId(xProjectId: string): ListScriptJobsRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): ListScriptJobsRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScriptJobsRequestStatusEnum {
    PROCESSING = 'PROCESSING',
    ABNORMAL = 'ABNORMAL',
    PAUSED = 'PAUSED',
    CANCELED = 'CANCELED',
    FINISHED = 'FINISHED'
}
