

export class ListDigitalHumanVideoRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    public state?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'create_until'?: string;
    private 'create_since'?: string;
    private 'fuzzy_query_field'?: Array<string>;
    private 'script_id'?: string;
    private 'asset_name'?: string;
    private 'job_type'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListDigitalHumanVideoRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListDigitalHumanVideoRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListDigitalHumanVideoRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListDigitalHumanVideoRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListDigitalHumanVideoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDigitalHumanVideoRequest {
        this['limit'] = limit;
        return this;
    }
    public withState(state: string): ListDigitalHumanVideoRequest {
        this['state'] = state;
        return this;
    }
    public withSortKey(sortKey: string): ListDigitalHumanVideoRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListDigitalHumanVideoRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withCreateUntil(createUntil: string): ListDigitalHumanVideoRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: string  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): string | undefined {
        return this['create_until'];
    }
    public withCreateSince(createSince: string): ListDigitalHumanVideoRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: string  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): string | undefined {
        return this['create_since'];
    }
    public withFuzzyQueryField(fuzzyQueryField: Array<string>): ListDigitalHumanVideoRequest {
        this['fuzzy_query_field'] = fuzzyQueryField;
        return this;
    }
    public set fuzzyQueryField(fuzzyQueryField: Array<string>  | undefined) {
        this['fuzzy_query_field'] = fuzzyQueryField;
    }
    public get fuzzyQueryField(): Array<string> | undefined {
        return this['fuzzy_query_field'];
    }
    public withScriptId(scriptId: string): ListDigitalHumanVideoRequest {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withAssetName(assetName: string): ListDigitalHumanVideoRequest {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withJobType(jobType: string): ListDigitalHumanVideoRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobId(jobId: string): ListDigitalHumanVideoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}