import { WebsiteExtendProperties } from './WebsiteExtendProperties';


export class Website {
    public value?: string;
    private 'main_domain'?: string;
    private 'protected_status'?: string;
    private 'is_public'?: boolean;
    public remark?: string;
    private 'name_server'?: Array<string>;
    private 'extend_properties'?: WebsiteExtendProperties;
    public constructor(value?: string, mainDomain?: string, protectedStatus?: string, isPublic?: boolean, nameServer?: Array<string>) { 
        this['value'] = value;
        this['main_domain'] = mainDomain;
        this['protected_status'] = protectedStatus;
        this['is_public'] = isPublic;
        this['name_server'] = nameServer;
    }
    public withValue(value: string): Website {
        this['value'] = value;
        return this;
    }
    public withMainDomain(mainDomain: string): Website {
        this['main_domain'] = mainDomain;
        return this;
    }
    public set mainDomain(mainDomain: string  | undefined) {
        this['main_domain'] = mainDomain;
    }
    public get mainDomain(): string | undefined {
        return this['main_domain'];
    }
    public withProtectedStatus(protectedStatus: string): Website {
        this['protected_status'] = protectedStatus;
        return this;
    }
    public set protectedStatus(protectedStatus: string  | undefined) {
        this['protected_status'] = protectedStatus;
    }
    public get protectedStatus(): string | undefined {
        return this['protected_status'];
    }
    public withIsPublic(isPublic: boolean): Website {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withRemark(remark: string): Website {
        this['remark'] = remark;
        return this;
    }
    public withNameServer(nameServer: Array<string>): Website {
        this['name_server'] = nameServer;
        return this;
    }
    public set nameServer(nameServer: Array<string>  | undefined) {
        this['name_server'] = nameServer;
    }
    public get nameServer(): Array<string> | undefined {
        return this['name_server'];
    }
    public withExtendProperties(extendProperties: WebsiteExtendProperties): Website {
        this['extend_properties'] = extendProperties;
        return this;
    }
    public set extendProperties(extendProperties: WebsiteExtendProperties  | undefined) {
        this['extend_properties'] = extendProperties;
    }
    public get extendProperties(): WebsiteExtendProperties | undefined {
        return this['extend_properties'];
    }
}