import { MonitorSystemRequestBody } from './MonitorSystemRequestBody';


export class CreateMonitorSystemRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public body?: MonitorSystemRequestBody;
    public constructor(xEnvironmentID?: string) { 
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateMonitorSystemRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): CreateMonitorSystemRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withBody(body: MonitorSystemRequestBody): CreateMonitorSystemRequest {
        this['body'] = body;
        return this;
    }
}