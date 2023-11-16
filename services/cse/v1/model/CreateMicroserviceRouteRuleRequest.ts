import { CreateRules } from './CreateRules';


export class CreateMicroserviceRouteRuleRequest {
    private 'Content-Type'?: string;
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'service_name'?: string;
    public environment?: string;
    private 'app_id'?: string;
    public body?: Array<CreateRules>;
    public constructor(contentType?: string, xEngineId?: string, xEnterpriseProjectID?: string, serviceName?: string) { 
        this['Content-Type'] = contentType;
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['service_name'] = serviceName;
    }
    public withContentType(contentType: string): CreateMicroserviceRouteRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXEngineId(xEngineId: string): CreateMicroserviceRouteRuleRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateMicroserviceRouteRuleRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withServiceName(serviceName: string): CreateMicroserviceRouteRuleRequest {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withEnvironment(environment: string): CreateMicroserviceRouteRuleRequest {
        this['environment'] = environment;
        return this;
    }
    public withAppId(appId: string): CreateMicroserviceRouteRuleRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: Array<CreateRules>): CreateMicroserviceRouteRuleRequest {
        this['body'] = body;
        return this;
    }
}