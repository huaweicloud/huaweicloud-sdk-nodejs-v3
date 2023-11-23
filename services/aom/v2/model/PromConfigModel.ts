

export class PromConfigModel {
    private 'remote_write_url'?: string;
    private 'remote_read_url'?: string;
    private 'prom_http_api_endpoint'?: string;
    private 'dashboard_id'?: string;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withRemoteWriteUrl(remoteWriteUrl: string): PromConfigModel {
        this['remote_write_url'] = remoteWriteUrl;
        return this;
    }
    public set remoteWriteUrl(remoteWriteUrl: string  | undefined) {
        this['remote_write_url'] = remoteWriteUrl;
    }
    public get remoteWriteUrl(): string | undefined {
        return this['remote_write_url'];
    }
    public withRemoteReadUrl(remoteReadUrl: string): PromConfigModel {
        this['remote_read_url'] = remoteReadUrl;
        return this;
    }
    public set remoteReadUrl(remoteReadUrl: string  | undefined) {
        this['remote_read_url'] = remoteReadUrl;
    }
    public get remoteReadUrl(): string | undefined {
        return this['remote_read_url'];
    }
    public withPromHttpApiEndpoint(promHttpApiEndpoint: string): PromConfigModel {
        this['prom_http_api_endpoint'] = promHttpApiEndpoint;
        return this;
    }
    public set promHttpApiEndpoint(promHttpApiEndpoint: string  | undefined) {
        this['prom_http_api_endpoint'] = promHttpApiEndpoint;
    }
    public get promHttpApiEndpoint(): string | undefined {
        return this['prom_http_api_endpoint'];
    }
    public withDashboardId(dashboardId: string): PromConfigModel {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withRegionId(regionId: string): PromConfigModel {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}