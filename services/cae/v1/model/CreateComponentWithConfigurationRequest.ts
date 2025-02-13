import { CreateComponentWithConfigurationRequestBody } from './CreateComponentWithConfigurationRequestBody';


export class CreateComponentWithConfigurationRequest {
    private 'application_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public body?: CreateComponentWithConfigurationRequestBody;
    public constructor(applicationId?: string, xEnvironmentID?: string) { 
        this['application_id'] = applicationId;
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withApplicationId(applicationId: string): CreateComponentWithConfigurationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateComponentWithConfigurationRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): CreateComponentWithConfigurationRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withBody(body: CreateComponentWithConfigurationRequestBody): CreateComponentWithConfigurationRequest {
        this['body'] = body;
        return this;
    }
}