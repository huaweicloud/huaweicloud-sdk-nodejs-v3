

export class QueryAssessTaskResponse {
    public id?: string;
    private 'application_name'?: string;
    private 'application_id'?: string;
    public status?: QueryAssessTaskResponseStatusEnum | string;
    public reason?: string;
    public progress?: number;
    public score?: number;
    private 'assess_report_id'?: string;
    private 'create_time'?: number;
    private 'last_assess_time'?: number;
    private 'last_update_time'?: number;
    public creator?: string;
    private 'creator_name'?: string;
    public operator?: string;
    private 'operator_name'?: string;
    public constructor() { 
    }
    public withId(id: string): QueryAssessTaskResponse {
        this['id'] = id;
        return this;
    }
    public withApplicationName(applicationName: string): QueryAssessTaskResponse {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withApplicationId(applicationId: string): QueryAssessTaskResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withStatus(status: QueryAssessTaskResponseStatusEnum | string): QueryAssessTaskResponse {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): QueryAssessTaskResponse {
        this['reason'] = reason;
        return this;
    }
    public withProgress(progress: number): QueryAssessTaskResponse {
        this['progress'] = progress;
        return this;
    }
    public withScore(score: number): QueryAssessTaskResponse {
        this['score'] = score;
        return this;
    }
    public withAssessReportId(assessReportId: string): QueryAssessTaskResponse {
        this['assess_report_id'] = assessReportId;
        return this;
    }
    public set assessReportId(assessReportId: string  | undefined) {
        this['assess_report_id'] = assessReportId;
    }
    public get assessReportId(): string | undefined {
        return this['assess_report_id'];
    }
    public withCreateTime(createTime: number): QueryAssessTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastAssessTime(lastAssessTime: number): QueryAssessTaskResponse {
        this['last_assess_time'] = lastAssessTime;
        return this;
    }
    public set lastAssessTime(lastAssessTime: number  | undefined) {
        this['last_assess_time'] = lastAssessTime;
    }
    public get lastAssessTime(): number | undefined {
        return this['last_assess_time'];
    }
    public withLastUpdateTime(lastUpdateTime: number): QueryAssessTaskResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withCreator(creator: string): QueryAssessTaskResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreatorName(creatorName: string): QueryAssessTaskResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withOperator(operator: string): QueryAssessTaskResponse {
        this['operator'] = operator;
        return this;
    }
    public withOperatorName(operatorName: string): QueryAssessTaskResponse {
        this['operator_name'] = operatorName;
        return this;
    }
    public set operatorName(operatorName: string  | undefined) {
        this['operator_name'] = operatorName;
    }
    public get operatorName(): string | undefined {
        return this['operator_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryAssessTaskResponseStatusEnum {
    NO_ASSESSMENT = 'no_assessment',
    ASSESS_FINISH = 'assess_finish',
    ASSESS_FAILED = 'assess_failed',
    ASSESSING = 'assessing'
}
