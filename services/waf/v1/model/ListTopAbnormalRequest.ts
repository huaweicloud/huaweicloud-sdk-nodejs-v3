

export class ListTopAbnormalRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public from?: number;
    public to?: number;
    public top?: number;
    public code?: ListTopAbnormalRequestCodeEnum | number;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    public constructor(contentType?: string, from?: number, to?: number) { 
        this['Content-Type'] = contentType;
        this['from'] = from;
        this['to'] = to;
    }
    public withContentType(contentType: string): ListTopAbnormalRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopAbnormalRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFrom(from: number): ListTopAbnormalRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListTopAbnormalRequest {
        this['to'] = to;
        return this;
    }
    public withTop(top: number): ListTopAbnormalRequest {
        this['top'] = top;
        return this;
    }
    public withCode(code: ListTopAbnormalRequestCodeEnum | number): ListTopAbnormalRequest {
        this['code'] = code;
        return this;
    }
    public withHosts(hosts: Array<string>): ListTopAbnormalRequest {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): ListTopAbnormalRequest {
        this['instances'] = instances;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTopAbnormalRequestCodeEnum {
    NUMBER_404 = 404,
    NUMBER_500 = 500,
    NUMBER_502 = 502
}
