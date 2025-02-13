import { MonitorSystemRequestBody } from './MonitorSystemRequestBody';


export class UpdateMonitorSystemRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    private 'monitor_system_id'?: string;
    public body?: MonitorSystemRequestBody;
    public constructor(xEnvironmentID?: string, monitorSystemId?: string) { 
        this['X-Environment-ID'] = xEnvironmentID;
        this['monitor_system_id'] = monitorSystemId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UpdateMonitorSystemRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): UpdateMonitorSystemRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withMonitorSystemId(monitorSystemId: string): UpdateMonitorSystemRequest {
        this['monitor_system_id'] = monitorSystemId;
        return this;
    }
    public set monitorSystemId(monitorSystemId: string  | undefined) {
        this['monitor_system_id'] = monitorSystemId;
    }
    public get monitorSystemId(): string | undefined {
        return this['monitor_system_id'];
    }
    public withBody(body: MonitorSystemRequestBody): UpdateMonitorSystemRequest {
        this['body'] = body;
        return this;
    }
}