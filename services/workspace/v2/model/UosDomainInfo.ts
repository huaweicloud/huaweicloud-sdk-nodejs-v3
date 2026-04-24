import { DomainType } from './DomainType';


export class UosDomainInfo {
    private 'auth_config_id'?: string;
    public id?: string;
    public type?: DomainType;
    private 'domain_name'?: string;
    public username?: string;
    private 'main_dc_address'?: string;
    private 'open_interface_address'?: string;
    private 'open_interface_domain_name'?: string;
    private 'internal_service_address'?: string;
    private 'app_cert_id'?: string;
    private 'app_cert_start_time'?: string;
    private 'app_cert_end_time'?: string;
    private 'openapi_ca_cert_id'?: string;
    private 'openapi_ca_cert_start_time'?: string;
    private 'openapi_ca_cert_end_time'?: string;
    public constructor() { 
    }
    public withAuthConfigId(authConfigId: string): UosDomainInfo {
        this['auth_config_id'] = authConfigId;
        return this;
    }
    public set authConfigId(authConfigId: string  | undefined) {
        this['auth_config_id'] = authConfigId;
    }
    public get authConfigId(): string | undefined {
        return this['auth_config_id'];
    }
    public withId(id: string): UosDomainInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: DomainType): UosDomainInfo {
        this['type'] = type;
        return this;
    }
    public withDomainName(domainName: string): UosDomainInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUsername(username: string): UosDomainInfo {
        this['username'] = username;
        return this;
    }
    public withMainDcAddress(mainDcAddress: string): UosDomainInfo {
        this['main_dc_address'] = mainDcAddress;
        return this;
    }
    public set mainDcAddress(mainDcAddress: string  | undefined) {
        this['main_dc_address'] = mainDcAddress;
    }
    public get mainDcAddress(): string | undefined {
        return this['main_dc_address'];
    }
    public withOpenInterfaceAddress(openInterfaceAddress: string): UosDomainInfo {
        this['open_interface_address'] = openInterfaceAddress;
        return this;
    }
    public set openInterfaceAddress(openInterfaceAddress: string  | undefined) {
        this['open_interface_address'] = openInterfaceAddress;
    }
    public get openInterfaceAddress(): string | undefined {
        return this['open_interface_address'];
    }
    public withOpenInterfaceDomainName(openInterfaceDomainName: string): UosDomainInfo {
        this['open_interface_domain_name'] = openInterfaceDomainName;
        return this;
    }
    public set openInterfaceDomainName(openInterfaceDomainName: string  | undefined) {
        this['open_interface_domain_name'] = openInterfaceDomainName;
    }
    public get openInterfaceDomainName(): string | undefined {
        return this['open_interface_domain_name'];
    }
    public withInternalServiceAddress(internalServiceAddress: string): UosDomainInfo {
        this['internal_service_address'] = internalServiceAddress;
        return this;
    }
    public set internalServiceAddress(internalServiceAddress: string  | undefined) {
        this['internal_service_address'] = internalServiceAddress;
    }
    public get internalServiceAddress(): string | undefined {
        return this['internal_service_address'];
    }
    public withAppCertId(appCertId: string): UosDomainInfo {
        this['app_cert_id'] = appCertId;
        return this;
    }
    public set appCertId(appCertId: string  | undefined) {
        this['app_cert_id'] = appCertId;
    }
    public get appCertId(): string | undefined {
        return this['app_cert_id'];
    }
    public withAppCertStartTime(appCertStartTime: string): UosDomainInfo {
        this['app_cert_start_time'] = appCertStartTime;
        return this;
    }
    public set appCertStartTime(appCertStartTime: string  | undefined) {
        this['app_cert_start_time'] = appCertStartTime;
    }
    public get appCertStartTime(): string | undefined {
        return this['app_cert_start_time'];
    }
    public withAppCertEndTime(appCertEndTime: string): UosDomainInfo {
        this['app_cert_end_time'] = appCertEndTime;
        return this;
    }
    public set appCertEndTime(appCertEndTime: string  | undefined) {
        this['app_cert_end_time'] = appCertEndTime;
    }
    public get appCertEndTime(): string | undefined {
        return this['app_cert_end_time'];
    }
    public withOpenapiCaCertId(openapiCaCertId: string): UosDomainInfo {
        this['openapi_ca_cert_id'] = openapiCaCertId;
        return this;
    }
    public set openapiCaCertId(openapiCaCertId: string  | undefined) {
        this['openapi_ca_cert_id'] = openapiCaCertId;
    }
    public get openapiCaCertId(): string | undefined {
        return this['openapi_ca_cert_id'];
    }
    public withOpenapiCaCertStartTime(openapiCaCertStartTime: string): UosDomainInfo {
        this['openapi_ca_cert_start_time'] = openapiCaCertStartTime;
        return this;
    }
    public set openapiCaCertStartTime(openapiCaCertStartTime: string  | undefined) {
        this['openapi_ca_cert_start_time'] = openapiCaCertStartTime;
    }
    public get openapiCaCertStartTime(): string | undefined {
        return this['openapi_ca_cert_start_time'];
    }
    public withOpenapiCaCertEndTime(openapiCaCertEndTime: string): UosDomainInfo {
        this['openapi_ca_cert_end_time'] = openapiCaCertEndTime;
        return this;
    }
    public set openapiCaCertEndTime(openapiCaCertEndTime: string  | undefined) {
        this['openapi_ca_cert_end_time'] = openapiCaCertEndTime;
    }
    public get openapiCaCertEndTime(): string | undefined {
        return this['openapi_ca_cert_end_time'];
    }
}