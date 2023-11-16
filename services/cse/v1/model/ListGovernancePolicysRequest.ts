

export class ListGovernancePolicysRequest {
    private 'Content-Type'?: string;
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public environment?: string;
    public app?: string;
    public constructor(contentType?: string, xEngineId?: string, xEnterpriseProjectID?: string, environment?: string) { 
        this['Content-Type'] = contentType;
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['environment'] = environment;
    }
    public withContentType(contentType: string): ListGovernancePolicysRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXEngineId(xEngineId: string): ListGovernancePolicysRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ListGovernancePolicysRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withEnvironment(environment: string): ListGovernancePolicysRequest {
        this['environment'] = environment;
        return this;
    }
    public withApp(app: string): ListGovernancePolicysRequest {
        this['app'] = app;
        return this;
    }
}