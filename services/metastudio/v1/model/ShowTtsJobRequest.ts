

export class ShowTtsJobRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public limit?: number;
    public offset?: number;
    private 'create_since'?: string;
    private 'create_until'?: string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'tts_service_enum'?: string;
    private 'business_type'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ShowTtsJobRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowTtsJobRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowTtsJobRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ShowTtsJobRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withLimit(limit: number): ShowTtsJobRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowTtsJobRequest {
        this['offset'] = offset;
        return this;
    }
    public withCreateSince(createSince: string): ShowTtsJobRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: string  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): string | undefined {
        return this['create_since'];
    }
    public withCreateUntil(createUntil: string): ShowTtsJobRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: string  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): string | undefined {
        return this['create_until'];
    }
    public withJobId(jobId: string): ShowTtsJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowTtsJobRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withTtsServiceEnum(ttsServiceEnum: string): ShowTtsJobRequest {
        this['tts_service_enum'] = ttsServiceEnum;
        return this;
    }
    public set ttsServiceEnum(ttsServiceEnum: string  | undefined) {
        this['tts_service_enum'] = ttsServiceEnum;
    }
    public get ttsServiceEnum(): string | undefined {
        return this['tts_service_enum'];
    }
    public withBusinessType(businessType: string): ShowTtsJobRequest {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
}