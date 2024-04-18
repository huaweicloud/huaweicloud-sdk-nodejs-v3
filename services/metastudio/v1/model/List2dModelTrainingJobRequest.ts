

export class List2dModelTrainingJobRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'create_until'?: string;
    private 'create_since'?: string;
    public state?: string;
    private 'query_project_id'?: string;
    private 'batch_name'?: string;
    public tag?: string;
    private 'job_id'?: string;
    public name?: string;
    private 'model_resolution'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): List2dModelTrainingJobRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): List2dModelTrainingJobRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): List2dModelTrainingJobRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): List2dModelTrainingJobRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): List2dModelTrainingJobRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): List2dModelTrainingJobRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): List2dModelTrainingJobRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): List2dModelTrainingJobRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withCreateUntil(createUntil: string): List2dModelTrainingJobRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: string  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): string | undefined {
        return this['create_until'];
    }
    public withCreateSince(createSince: string): List2dModelTrainingJobRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: string  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): string | undefined {
        return this['create_since'];
    }
    public withState(state: string): List2dModelTrainingJobRequest {
        this['state'] = state;
        return this;
    }
    public withQueryProjectId(queryProjectId: string): List2dModelTrainingJobRequest {
        this['query_project_id'] = queryProjectId;
        return this;
    }
    public set queryProjectId(queryProjectId: string  | undefined) {
        this['query_project_id'] = queryProjectId;
    }
    public get queryProjectId(): string | undefined {
        return this['query_project_id'];
    }
    public withBatchName(batchName: string): List2dModelTrainingJobRequest {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withTag(tag: string): List2dModelTrainingJobRequest {
        this['tag'] = tag;
        return this;
    }
    public withJobId(jobId: string): List2dModelTrainingJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withName(name: string): List2dModelTrainingJobRequest {
        this['name'] = name;
        return this;
    }
    public withModelResolution(modelResolution: string): List2dModelTrainingJobRequest {
        this['model_resolution'] = modelResolution;
        return this;
    }
    public set modelResolution(modelResolution: string  | undefined) {
        this['model_resolution'] = modelResolution;
    }
    public get modelResolution(): string | undefined {
        return this['model_resolution'];
    }
}