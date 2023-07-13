import { EngineRbacPwd } from './EngineRbacPwd';


export class EngineCreateReq {
    public name: string;
    public description?: string;
    public payment: EngineCreateReqPaymentEnum;
    public flavor: EngineCreateReqFlavorEnum;
    public azList: Array<string>;
    public authType: EngineCreateReqAuthTypeEnum;
    public vpc: string;
    public networkId: string;
    public subnetCidr: string;
    public publicIpId?: string;
    private 'auth_cred'?: EngineRbacPwd | undefined;
    public specType: EngineCreateReqSpecTypeEnum;
    public inputs?: { [key: string]: string; };
    public constructor(name?: any, payment?: any, flavor?: any, azList?: any, authType?: any, vpc?: any, networkId?: any, subnetCidr?: any, specType?: any) { 
        this['name'] = name;
        this['payment'] = payment;
        this['flavor'] = flavor;
        this['azList'] = azList;
        this['authType'] = authType;
        this['vpc'] = vpc;
        this['networkId'] = networkId;
        this['subnetCidr'] = subnetCidr;
        this['specType'] = specType;
    }
    public withName(name: string): EngineCreateReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EngineCreateReq {
        this['description'] = description;
        return this;
    }
    public withPayment(payment: EngineCreateReqPaymentEnum): EngineCreateReq {
        this['payment'] = payment;
        return this;
    }
    public withFlavor(flavor: EngineCreateReqFlavorEnum): EngineCreateReq {
        this['flavor'] = flavor;
        return this;
    }
    public withAzList(azList: Array<string>): EngineCreateReq {
        this['azList'] = azList;
        return this;
    }
    public withAuthType(authType: EngineCreateReqAuthTypeEnum): EngineCreateReq {
        this['authType'] = authType;
        return this;
    }
    public withVpc(vpc: string): EngineCreateReq {
        this['vpc'] = vpc;
        return this;
    }
    public withNetworkId(networkId: string): EngineCreateReq {
        this['networkId'] = networkId;
        return this;
    }
    public withSubnetCidr(subnetCidr: string): EngineCreateReq {
        this['subnetCidr'] = subnetCidr;
        return this;
    }
    public withPublicIpId(publicIpId: string): EngineCreateReq {
        this['publicIpId'] = publicIpId;
        return this;
    }
    public withAuthCred(authCred: EngineRbacPwd): EngineCreateReq {
        this['auth_cred'] = authCred;
        return this;
    }
    public set authCred(authCred: EngineRbacPwd | undefined) {
        this['auth_cred'] = authCred;
    }
    public get authCred() {
        return this['auth_cred'];
    }
    public withSpecType(specType: EngineCreateReqSpecTypeEnum): EngineCreateReq {
        this['specType'] = specType;
        return this;
    }
    public withInputs(inputs: { [key: string]: string; }): EngineCreateReq {
        this['inputs'] = inputs;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EngineCreateReqPaymentEnum {
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum EngineCreateReqFlavorEnum {
    CSE_S1_SMALL2 = 'cse.s1.small2',
    CSE_S1_MEDIUM2 = 'cse.s1.medium2',
    CSE_S1_LARGE2 = 'cse.s1.large2',
    CSE_S1_XLARGE2 = 'cse.s1.xlarge2'
}
/**
    * @export
    * @enum {string}
    */
export enum EngineCreateReqAuthTypeEnum {
    RBAC = 'RBAC',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum EngineCreateReqSpecTypeEnum {
    CSE = 'CSE',
    CSE2 = 'CSE2'
}
