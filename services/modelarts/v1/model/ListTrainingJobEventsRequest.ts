

export class ListTrainingJobEventsRequest {
    private 'training_job_id'?: string;
    public offset?: number;
    public limit?: number;
    public order?: ListTrainingJobEventsRequestOrderEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'X-Language'?: ListTrainingJobEventsRequestXLanguageEnum | string;
    public level?: string;
    public pattern?: string;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): ListTrainingJobEventsRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withOffset(offset: number): ListTrainingJobEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTrainingJobEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: ListTrainingJobEventsRequestOrderEnum | string): ListTrainingJobEventsRequest {
        this['order'] = order;
        return this;
    }
    public withStartTime(startTime: string): ListTrainingJobEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTrainingJobEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withXLanguage(xLanguage: ListTrainingJobEventsRequestXLanguageEnum | string): ListTrainingJobEventsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTrainingJobEventsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTrainingJobEventsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withLevel(level: string): ListTrainingJobEventsRequest {
        this['level'] = level;
        return this;
    }
    public withPattern(pattern: string): ListTrainingJobEventsRequest {
        this['pattern'] = pattern;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTrainingJobEventsRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTrainingJobEventsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
