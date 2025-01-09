import { InterfacesRequest } from './InterfacesRequest';


export class InterfacesConfig {
    private 'apply_platform'?: string;
    public id?: string;
    public name?: string;
    public type?: string;
    public results?: { [key: string]: string; };
    public pagination?: { [key: string]: object; };
    public request?: InterfacesRequest;
    public response?: string;
    private 'result_check'?: string;
    public constructor() { 
    }
    public withApplyPlatform(applyPlatform: string): InterfacesConfig {
        this['apply_platform'] = applyPlatform;
        return this;
    }
    public set applyPlatform(applyPlatform: string  | undefined) {
        this['apply_platform'] = applyPlatform;
    }
    public get applyPlatform(): string | undefined {
        return this['apply_platform'];
    }
    public withId(id: string): InterfacesConfig {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InterfacesConfig {
        this['name'] = name;
        return this;
    }
    public withType(type: string): InterfacesConfig {
        this['type'] = type;
        return this;
    }
    public withResults(results: { [key: string]: string; }): InterfacesConfig {
        this['results'] = results;
        return this;
    }
    public withPagination(pagination: { [key: string]: object; }): InterfacesConfig {
        this['pagination'] = pagination;
        return this;
    }
    public withRequest(request: InterfacesRequest): InterfacesConfig {
        this['request'] = request;
        return this;
    }
    public withResponse(response: string): InterfacesConfig {
        this['response'] = response;
        return this;
    }
    public withResultCheck(resultCheck: string): InterfacesConfig {
        this['result_check'] = resultCheck;
        return this;
    }
    public set resultCheck(resultCheck: string  | undefined) {
        this['result_check'] = resultCheck;
    }
    public get resultCheck(): string | undefined {
        return this['result_check'];
    }
}