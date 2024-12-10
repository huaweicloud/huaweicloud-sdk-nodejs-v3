import { MicroServiceInfoCCE } from './MicroServiceInfoCCE';
import { MicroServiceInfoCCEService } from './MicroServiceInfoCCEService';
import { MicroServiceInfoCSE } from './MicroServiceInfoCSE';
import { MicroServiceInfoNacosBase } from './MicroServiceInfoNacosBase';


export class MicroServiceInfo {
    public id?: string;
    private 'instance_id'?: string;
    private 'service_type'?: MicroServiceInfoServiceTypeEnum | string;
    private 'cse_info'?: MicroServiceInfoCSE;
    private 'cce_info'?: MicroServiceInfoCCE;
    private 'cce_service_info'?: MicroServiceInfoCCEService;
    private 'nacos_info'?: MicroServiceInfoNacosBase;
    private 'update_time'?: Date;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): MicroServiceInfo {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): MicroServiceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withServiceType(serviceType: MicroServiceInfoServiceTypeEnum | string): MicroServiceInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: MicroServiceInfoServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): MicroServiceInfoServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withCseInfo(cseInfo: MicroServiceInfoCSE): MicroServiceInfo {
        this['cse_info'] = cseInfo;
        return this;
    }
    public set cseInfo(cseInfo: MicroServiceInfoCSE  | undefined) {
        this['cse_info'] = cseInfo;
    }
    public get cseInfo(): MicroServiceInfoCSE | undefined {
        return this['cse_info'];
    }
    public withCceInfo(cceInfo: MicroServiceInfoCCE): MicroServiceInfo {
        this['cce_info'] = cceInfo;
        return this;
    }
    public set cceInfo(cceInfo: MicroServiceInfoCCE  | undefined) {
        this['cce_info'] = cceInfo;
    }
    public get cceInfo(): MicroServiceInfoCCE | undefined {
        return this['cce_info'];
    }
    public withCceServiceInfo(cceServiceInfo: MicroServiceInfoCCEService): MicroServiceInfo {
        this['cce_service_info'] = cceServiceInfo;
        return this;
    }
    public set cceServiceInfo(cceServiceInfo: MicroServiceInfoCCEService  | undefined) {
        this['cce_service_info'] = cceServiceInfo;
    }
    public get cceServiceInfo(): MicroServiceInfoCCEService | undefined {
        return this['cce_service_info'];
    }
    public withNacosInfo(nacosInfo: MicroServiceInfoNacosBase): MicroServiceInfo {
        this['nacos_info'] = nacosInfo;
        return this;
    }
    public set nacosInfo(nacosInfo: MicroServiceInfoNacosBase  | undefined) {
        this['nacos_info'] = nacosInfo;
    }
    public get nacosInfo(): MicroServiceInfoNacosBase | undefined {
        return this['nacos_info'];
    }
    public withUpdateTime(updateTime: Date): MicroServiceInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: Date): MicroServiceInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroServiceInfoServiceTypeEnum {
    CSE = 'CSE',
    CCE = 'CCE',
    CCE_SERVICE = 'CCE_SERVICE',
    NACOS = 'NACOS'
}
