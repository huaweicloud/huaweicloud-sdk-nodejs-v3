

export class ListRtcHistoryQualityRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'X-Project-Id'?: string | undefined;
    public app: string;
    public metric: Array<string>;
    private 'start_date'?: string | undefined;
    private 'end_date'?: string | undefined;
    public constructor(app?: any, metric?: any) { 
        this['app'] = app;
        this['metric'] = metric;
    }
    public withAuthorization(authorization: string): ListRtcHistoryQualityRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcHistoryQualityRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcHistoryQualityRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId() {
        return this['X-Project-Id'];
    }
    public withApp(app: string): ListRtcHistoryQualityRequest {
        this['app'] = app;
        return this;
    }
    public withMetric(metric: Array<string>): ListRtcHistoryQualityRequest {
        this['metric'] = metric;
        return this;
    }
    public withStartDate(startDate: string): ListRtcHistoryQualityRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListRtcHistoryQualityRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate() {
        return this['end_date'];
    }
}