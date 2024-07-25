import { MicroServiceInfoCCEBase } from './MicroServiceInfoCCEBase';
import { MicroServiceInfoCSEBase } from './MicroServiceInfoCSEBase';


export class MicroServiceCreate {
    private 'service_type'?: MicroServiceCreateServiceTypeEnum | string;
    private 'cse_info'?: MicroServiceInfoCSEBase;
    private 'cce_info'?: MicroServiceInfoCCEBase;
    public constructor() { 
    }
    public withServiceType(serviceType: MicroServiceCreateServiceTypeEnum | string): MicroServiceCreate {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: MicroServiceCreateServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): MicroServiceCreateServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withCseInfo(cseInfo: MicroServiceInfoCSEBase): MicroServiceCreate {
        this['cse_info'] = cseInfo;
        return this;
    }
    public set cseInfo(cseInfo: MicroServiceInfoCSEBase  | undefined) {
        this['cse_info'] = cseInfo;
    }
    public get cseInfo(): MicroServiceInfoCSEBase | undefined {
        return this['cse_info'];
    }
    public withCceInfo(cceInfo: MicroServiceInfoCCEBase): MicroServiceCreate {
        this['cce_info'] = cceInfo;
        return this;
    }
    public set cceInfo(cceInfo: MicroServiceInfoCCEBase  | undefined) {
        this['cce_info'] = cceInfo;
    }
    public get cceInfo(): MicroServiceInfoCCEBase | undefined {
        return this['cce_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroServiceCreateServiceTypeEnum {
    CSE = 'CSE',
    CCE = 'CCE',
    CCE_SERVICE = 'CCE_SERVICE'
}
