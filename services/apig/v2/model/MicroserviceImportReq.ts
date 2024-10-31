import { MicroServiceInfoCCECreate } from './MicroServiceInfoCCECreate';
import { MicroServiceInfoCSECreate } from './MicroServiceInfoCSECreate';
import { MicroServiceInfoNacosBase } from './MicroServiceInfoNacosBase';
import { MicroserviceApiCreate } from './MicroserviceApiCreate';
import { MicroserviceGroup } from './MicroserviceGroup';


export class MicroserviceImportReq {
    private 'group_info'?: MicroserviceGroup;
    private 'service_type'?: MicroserviceImportReqServiceTypeEnum | string;
    public protocol?: MicroserviceImportReqProtocolEnum | string;
    public apis?: Array<MicroserviceApiCreate>;
    private 'backend_timeout'?: number;
    private 'auth_type'?: MicroserviceImportReqAuthTypeEnum | string;
    public cors?: boolean;
    private 'cse_info'?: MicroServiceInfoCSECreate;
    private 'cce_info'?: MicroServiceInfoCCECreate;
    private 'nacos_info'?: MicroServiceInfoNacosBase;
    public constructor(groupInfo?: MicroserviceGroup, serviceType?: string, apis?: Array<MicroserviceApiCreate>) { 
        this['group_info'] = groupInfo;
        this['service_type'] = serviceType;
        this['apis'] = apis;
    }
    public withGroupInfo(groupInfo: MicroserviceGroup): MicroserviceImportReq {
        this['group_info'] = groupInfo;
        return this;
    }
    public set groupInfo(groupInfo: MicroserviceGroup  | undefined) {
        this['group_info'] = groupInfo;
    }
    public get groupInfo(): MicroserviceGroup | undefined {
        return this['group_info'];
    }
    public withServiceType(serviceType: MicroserviceImportReqServiceTypeEnum | string): MicroserviceImportReq {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: MicroserviceImportReqServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): MicroserviceImportReqServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withProtocol(protocol: MicroserviceImportReqProtocolEnum | string): MicroserviceImportReq {
        this['protocol'] = protocol;
        return this;
    }
    public withApis(apis: Array<MicroserviceApiCreate>): MicroserviceImportReq {
        this['apis'] = apis;
        return this;
    }
    public withBackendTimeout(backendTimeout: number): MicroserviceImportReq {
        this['backend_timeout'] = backendTimeout;
        return this;
    }
    public set backendTimeout(backendTimeout: number  | undefined) {
        this['backend_timeout'] = backendTimeout;
    }
    public get backendTimeout(): number | undefined {
        return this['backend_timeout'];
    }
    public withAuthType(authType: MicroserviceImportReqAuthTypeEnum | string): MicroserviceImportReq {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: MicroserviceImportReqAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): MicroserviceImportReqAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withCors(cors: boolean): MicroserviceImportReq {
        this['cors'] = cors;
        return this;
    }
    public withCseInfo(cseInfo: MicroServiceInfoCSECreate): MicroserviceImportReq {
        this['cse_info'] = cseInfo;
        return this;
    }
    public set cseInfo(cseInfo: MicroServiceInfoCSECreate  | undefined) {
        this['cse_info'] = cseInfo;
    }
    public get cseInfo(): MicroServiceInfoCSECreate | undefined {
        return this['cse_info'];
    }
    public withCceInfo(cceInfo: MicroServiceInfoCCECreate): MicroserviceImportReq {
        this['cce_info'] = cceInfo;
        return this;
    }
    public set cceInfo(cceInfo: MicroServiceInfoCCECreate  | undefined) {
        this['cce_info'] = cceInfo;
    }
    public get cceInfo(): MicroServiceInfoCCECreate | undefined {
        return this['cce_info'];
    }
    public withNacosInfo(nacosInfo: MicroServiceInfoNacosBase): MicroserviceImportReq {
        this['nacos_info'] = nacosInfo;
        return this;
    }
    public set nacosInfo(nacosInfo: MicroServiceInfoNacosBase  | undefined) {
        this['nacos_info'] = nacosInfo;
    }
    public get nacosInfo(): MicroServiceInfoNacosBase | undefined {
        return this['nacos_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroserviceImportReqServiceTypeEnum {
    CSE = 'CSE',
    CCE = 'CCE',
    CCE_SERVICE = 'CCE_SERVICE',
    NACOS = 'NACOS'
}
/**
    * @export
    * @enum {string}
    */
export enum MicroserviceImportReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum MicroserviceImportReqAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM'
}
