import { EngineReference } from './EngineReference';
import { EntrypointItem } from './EntrypointItem';


export class EngineSimpleInfo {
    public id?: string;
    public name?: string;
    public enterpriseProjectId?: string;
    public enterpriseProjectName?: string;
    public type?: EngineSimpleInfoTypeEnum | string;
    public description?: string;
    public flavor?: EngineSimpleInfoFlavorEnum | string;
    public payment?: string;
    public authType?: EngineSimpleInfoAuthTypeEnum | string;
    public status?: EngineSimpleInfoStatusEnum | string;
    public externalAddress?: string;
    public serviceEndpoint?: { [key: string]: EntrypointItem; };
    public publicAddress?: string;
    public publicServiceEndpoint?: { [key: string]: EntrypointItem; };
    public totalInstance?: number;
    public usedInstance?: number;
    public availableInstance?: number;
    public version?: string;
    public latestVersion?: string;
    public createTime?: number;
    public dueTo?: number;
    public latestJobId?: number;
    public engineAdditionalActions?: Array<EngineSimpleInfoEngineAdditionalActionsEnum> | Array<string>;
    public specType?: EngineSimpleInfoSpecTypeEnum | string;
    public reference?: EngineReference;
    public constructor() { 
    }
    public withId(id: string): EngineSimpleInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EngineSimpleInfo {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EngineSimpleInfo {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): EngineSimpleInfo {
        this['enterpriseProjectName'] = enterpriseProjectName;
        return this;
    }
    public withType(type: EngineSimpleInfoTypeEnum | string): EngineSimpleInfo {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): EngineSimpleInfo {
        this['description'] = description;
        return this;
    }
    public withFlavor(flavor: EngineSimpleInfoFlavorEnum | string): EngineSimpleInfo {
        this['flavor'] = flavor;
        return this;
    }
    public withPayment(payment: string): EngineSimpleInfo {
        this['payment'] = payment;
        return this;
    }
    public withAuthType(authType: EngineSimpleInfoAuthTypeEnum | string): EngineSimpleInfo {
        this['authType'] = authType;
        return this;
    }
    public withStatus(status: EngineSimpleInfoStatusEnum | string): EngineSimpleInfo {
        this['status'] = status;
        return this;
    }
    public withExternalAddress(externalAddress: string): EngineSimpleInfo {
        this['externalAddress'] = externalAddress;
        return this;
    }
    public withServiceEndpoint(serviceEndpoint: { [key: string]: EntrypointItem; }): EngineSimpleInfo {
        this['serviceEndpoint'] = serviceEndpoint;
        return this;
    }
    public withPublicAddress(publicAddress: string): EngineSimpleInfo {
        this['publicAddress'] = publicAddress;
        return this;
    }
    public withPublicServiceEndpoint(publicServiceEndpoint: { [key: string]: EntrypointItem; }): EngineSimpleInfo {
        this['publicServiceEndpoint'] = publicServiceEndpoint;
        return this;
    }
    public withTotalInstance(totalInstance: number): EngineSimpleInfo {
        this['totalInstance'] = totalInstance;
        return this;
    }
    public withUsedInstance(usedInstance: number): EngineSimpleInfo {
        this['usedInstance'] = usedInstance;
        return this;
    }
    public withAvailableInstance(availableInstance: number): EngineSimpleInfo {
        this['availableInstance'] = availableInstance;
        return this;
    }
    public withVersion(version: string): EngineSimpleInfo {
        this['version'] = version;
        return this;
    }
    public withLatestVersion(latestVersion: string): EngineSimpleInfo {
        this['latestVersion'] = latestVersion;
        return this;
    }
    public withCreateTime(createTime: number): EngineSimpleInfo {
        this['createTime'] = createTime;
        return this;
    }
    public withDueTo(dueTo: number): EngineSimpleInfo {
        this['dueTo'] = dueTo;
        return this;
    }
    public withLatestJobId(latestJobId: number): EngineSimpleInfo {
        this['latestJobId'] = latestJobId;
        return this;
    }
    public withEngineAdditionalActions(engineAdditionalActions: Array<EngineSimpleInfoEngineAdditionalActionsEnum> | Array<string>): EngineSimpleInfo {
        this['engineAdditionalActions'] = engineAdditionalActions;
        return this;
    }
    public withSpecType(specType: EngineSimpleInfoSpecTypeEnum | string): EngineSimpleInfo {
        this['specType'] = specType;
        return this;
    }
    public withReference(reference: EngineReference): EngineSimpleInfo {
        this['reference'] = reference;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EngineSimpleInfoTypeEnum {
    CSE = 'CSE',
    CSE_SHARE = 'CSE_Share'
}
/**
    * @export
    * @enum {string}
    */
export enum EngineSimpleInfoFlavorEnum {
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
export enum EngineSimpleInfoAuthTypeEnum {
    RBAC = 'RBAC',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum EngineSimpleInfoStatusEnum {
    CREATING = 'Creating',
    AVAILABLE = 'Available',
    UNAVAILABLE = 'Unavailable',
    DELETING = 'Deleting',
    DELETED = 'Deleted',
    UPGRADING = 'Upgrading',
    MODIFYING = 'Modifying',
    CREATEFAILED = 'CreateFailed',
    DELETEFAILED = 'DeleteFailed',
    UPGRADEFAILED = 'UpgradeFailed',
    MODIFYFAILED = 'ModifyFailed',
    FREEZED = 'Freezed'
}
/**
    * @export
    * @enum {string}
    */
export enum EngineSimpleInfoEngineAdditionalActionsEnum {
    NOTING = 'Noting',
    FORCEDELETE = 'ForceDelete',
    ROLLBACK = 'Rollback',
    RETRY = 'Retry'
}
/**
    * @export
    * @enum {string}
    */
export enum EngineSimpleInfoSpecTypeEnum {
    CCE = 'CCE',
    CSE = 'CSE',
    SPRINGCLOUD = 'SpringCloud'
}
