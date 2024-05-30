import { EngineCreateReqEnginestateInfo } from './EngineCreateReqEnginestateInfo';
import { EngineCreateReqEnterpriseProject } from './EngineCreateReqEnterpriseProject';
import { EngineCreateReqFlavorType } from './EngineCreateReqFlavorType';
import { EngineCreateReqMaintenanceConfig } from './EngineCreateReqMaintenanceConfig';
import { EngineCreateReqResourceParams } from './EngineCreateReqResourceParams';
import { EngineRbacPwd } from './EngineRbacPwd';


export class EngineCreateReq {
    public name?: string;
    public description?: string;
    public payment?: EngineCreateReqPaymentEnum | string;
    public flavor?: EngineCreateReqFlavorEnum | string;
    public azList?: Array<string>;
    public authType?: EngineCreateReqAuthTypeEnum | string;
    public vpc?: string;
    public vpcId?: string;
    public networkId?: string;
    public subnetCidr?: string;
    public publicIpId?: string;
    private 'auth_cred'?: EngineRbacPwd;
    public specType?: EngineCreateReqSpecTypeEnum | string;
    public inputs?: { [key: string]: string; };
    public enginestateInfo?: EngineCreateReqEnginestateInfo;
    public periodType?: number;
    public flavorType?: EngineCreateReqFlavorType;
    public enterpriseProject?: EngineCreateReqEnterpriseProject;
    public vpcCidr?: string;
    public resourceParams?: EngineCreateReqResourceParams;
    public productId?: string;
    public capacityProductId?: string;
    public isFree?: boolean;
    public subnetName?: string;
    public tags?: Array<string>;
    public maintenanceConfig?: EngineCreateReqMaintenanceConfig;
    public elbid?: string;
    public constructor(name?: string, payment?: string, flavor?: string, authType?: string, vpc?: string, networkId?: string, subnetCidr?: string, specType?: string) { 
        this['name'] = name;
        this['payment'] = payment;
        this['flavor'] = flavor;
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
    public withPayment(payment: EngineCreateReqPaymentEnum | string): EngineCreateReq {
        this['payment'] = payment;
        return this;
    }
    public withFlavor(flavor: EngineCreateReqFlavorEnum | string): EngineCreateReq {
        this['flavor'] = flavor;
        return this;
    }
    public withAzList(azList: Array<string>): EngineCreateReq {
        this['azList'] = azList;
        return this;
    }
    public withAuthType(authType: EngineCreateReqAuthTypeEnum | string): EngineCreateReq {
        this['authType'] = authType;
        return this;
    }
    public withVpc(vpc: string): EngineCreateReq {
        this['vpc'] = vpc;
        return this;
    }
    public withVpcId(vpcId: string): EngineCreateReq {
        this['vpcId'] = vpcId;
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
    public set authCred(authCred: EngineRbacPwd  | undefined) {
        this['auth_cred'] = authCred;
    }
    public get authCred(): EngineRbacPwd | undefined {
        return this['auth_cred'];
    }
    public withSpecType(specType: EngineCreateReqSpecTypeEnum | string): EngineCreateReq {
        this['specType'] = specType;
        return this;
    }
    public withInputs(inputs: { [key: string]: string; }): EngineCreateReq {
        this['inputs'] = inputs;
        return this;
    }
    public withEnginestateInfo(enginestateInfo: EngineCreateReqEnginestateInfo): EngineCreateReq {
        this['enginestateInfo'] = enginestateInfo;
        return this;
    }
    public withPeriodType(periodType: number): EngineCreateReq {
        this['periodType'] = periodType;
        return this;
    }
    public withFlavorType(flavorType: EngineCreateReqFlavorType): EngineCreateReq {
        this['flavorType'] = flavorType;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: EngineCreateReqEnterpriseProject): EngineCreateReq {
        this['enterpriseProject'] = enterpriseProject;
        return this;
    }
    public withVpcCidr(vpcCidr: string): EngineCreateReq {
        this['vpcCidr'] = vpcCidr;
        return this;
    }
    public withResourceParams(resourceParams: EngineCreateReqResourceParams): EngineCreateReq {
        this['resourceParams'] = resourceParams;
        return this;
    }
    public withProductId(productId: string): EngineCreateReq {
        this['productId'] = productId;
        return this;
    }
    public withCapacityProductId(capacityProductId: string): EngineCreateReq {
        this['capacityProductId'] = capacityProductId;
        return this;
    }
    public withIsFree(isFree: boolean): EngineCreateReq {
        this['isFree'] = isFree;
        return this;
    }
    public withSubnetName(subnetName: string): EngineCreateReq {
        this['subnetName'] = subnetName;
        return this;
    }
    public withTags(tags: Array<string>): EngineCreateReq {
        this['tags'] = tags;
        return this;
    }
    public withMaintenanceConfig(maintenanceConfig: EngineCreateReqMaintenanceConfig): EngineCreateReq {
        this['maintenanceConfig'] = maintenanceConfig;
        return this;
    }
    public withElbid(elbid: string): EngineCreateReq {
        this['elbid'] = elbid;
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
    CSE_S1_XLARGE2 = 'cse.s1.xlarge2',
    CSE_NACOS2_C1_LARGE_10 = 'cse.nacos2.c1.large.10',
    CSE_NACOS2_C1_XLARGE_20 = 'cse.nacos2.c1.xlarge.20',
    CSE_NACOS2_C1_XLARGE_50 = 'cse.nacos2.c1.xlarge.50',
    CSE_NACOS2_C1_XLARGE_60 = 'cse.nacos2.c1.xlarge.60',
    CSE_NACOS2_C1_2XLARGE_100 = 'cse.nacos2.c1.2xlarge.100',
    CSE_MICROGATEWAY_PRO_SMALL_1 = 'cse.microgateway.pro.small.1',
    CSE_MICROGATEWAY_PRO_MEDIUM_1 = 'cse.microgateway.pro.medium.1',
    CSE_MICROGATEWAY_PRO_LARGE_1 = 'cse.microgateway.pro.large.1'
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
    CSE2 = 'CSE2',
    NACOS2 = 'Nacos2',
    MICROGATEWAY = 'MicroGateway'
}
