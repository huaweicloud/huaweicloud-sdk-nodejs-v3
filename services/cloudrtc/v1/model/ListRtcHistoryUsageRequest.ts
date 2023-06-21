

export class ListRtcHistoryUsageRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'X-Project-Id'?: string | undefined;
    public app: string;
    public metric: string;
    private 'start_date': string | undefined;
    private 'end_date': string | undefined;
    public constructor(app?: any, metric?: any, startDate?: any, endDate?: any) { 
        this['app'] = app;
        this['metric'] = metric;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
    }
    public withAuthorization(authorization: string): ListRtcHistoryUsageRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcHistoryUsageRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcHistoryUsageRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId() {
        return this['X-Project-Id'];
    }
    public withApp(app: string): ListRtcHistoryUsageRequest {
        this['app'] = app;
        return this;
    }
    public withMetric(metric: string): ListRtcHistoryUsageRequest {
        this['metric'] = metric;
        return this;
    }
    public withStartDate(startDate: string): ListRtcHistoryUsageRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListRtcHistoryUsageRequest {
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