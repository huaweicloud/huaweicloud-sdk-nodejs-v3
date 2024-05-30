import { EngineExternalEntrypoint } from './EngineExternalEntrypoint';
import { EngineReference } from './EngineReference';
import { Spec } from './Spec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public authType?: ShowEngineResponseAuthTypeEnum | string;
    public flavor?: string;
    public payment?: string;
    public version?: string;
    public latestVersion?: string;
    public status?: ShowEngineResponseStatusEnum | string;
    public beDefault?: boolean;
    public createUser?: string;
    public createTime?: number;
    public cceSpec?: Spec;
    public externalEntrypoint?: EngineExternalEntrypoint;
    public reference?: EngineReference;
    public latestJobId?: number;
    public enterpriseProjectId?: string;
    public enterpriseProjectName?: string;
    public engineAdditionalActions?: Array<ShowEngineResponseEngineAdditionalActionsEnum> | Array<string>;
    public specType?: ShowEngineResponseSpecTypeEnum | string;
    public type?: ShowEngineResponseTypeEnum | string;
    public projectId?: string;
    public vmIds?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowEngineResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowEngineResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowEngineResponse {
        this['description'] = description;
        return this;
    }
    public withAuthType(authType: ShowEngineResponseAuthTypeEnum | string): ShowEngineResponse {
        this['authType'] = authType;
        return this;
    }
    public withFlavor(flavor: string): ShowEngineResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withPayment(payment: string): ShowEngineResponse {
        this['payment'] = payment;
        return this;
    }
    public withVersion(version: string): ShowEngineResponse {
        this['version'] = version;
        return this;
    }
    public withLatestVersion(latestVersion: string): ShowEngineResponse {
        this['latestVersion'] = latestVersion;
        return this;
    }
    public withStatus(status: ShowEngineResponseStatusEnum | string): ShowEngineResponse {
        this['status'] = status;
        return this;
    }
    public withBeDefault(beDefault: boolean): ShowEngineResponse {
        this['beDefault'] = beDefault;
        return this;
    }
    public withCreateUser(createUser: string): ShowEngineResponse {
        this['createUser'] = createUser;
        return this;
    }
    public withCreateTime(createTime: number): ShowEngineResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withCceSpec(cceSpec: Spec): ShowEngineResponse {
        this['cceSpec'] = cceSpec;
        return this;
    }
    public withExternalEntrypoint(externalEntrypoint: EngineExternalEntrypoint): ShowEngineResponse {
        this['externalEntrypoint'] = externalEntrypoint;
        return this;
    }
    public withReference(reference: EngineReference): ShowEngineResponse {
        this['reference'] = reference;
        return this;
    }
    public withLatestJobId(latestJobId: number): ShowEngineResponse {
        this['latestJobId'] = latestJobId;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowEngineResponse {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ShowEngineResponse {
        this['enterpriseProjectName'] = enterpriseProjectName;
        return this;
    }
    public withEngineAdditionalActions(engineAdditionalActions: Array<ShowEngineResponseEngineAdditionalActionsEnum> | Array<string>): ShowEngineResponse {
        this['engineAdditionalActions'] = engineAdditionalActions;
        return this;
    }
    public withSpecType(specType: ShowEngineResponseSpecTypeEnum | string): ShowEngineResponse {
        this['specType'] = specType;
        return this;
    }
    public withType(type: ShowEngineResponseTypeEnum | string): ShowEngineResponse {
        this['type'] = type;
        return this;
    }
    public withProjectId(projectId: string): ShowEngineResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withVmIds(vmIds: Array<string>): ShowEngineResponse {
        this['vmIds'] = vmIds;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEngineResponseAuthTypeEnum {
    RBAC = 'RBAC',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowEngineResponseStatusEnum {
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
export enum ShowEngineResponseEngineAdditionalActionsEnum {
    NOTING = 'Noting',
    FORCEDELETE = 'ForceDelete',
    ROLLBACK = 'Rollback',
    RETRY = 'Retry'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowEngineResponseSpecTypeEnum {
    CSE2 = 'CSE2',
    NACOS2 = 'Nacos2',
    MICROGATEWAY = 'MicroGateway'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowEngineResponseTypeEnum {
    CSE = 'CSE',
    NACOS = 'NACOS',
    MICROGATEWAY = 'MICROGATEWAY'
}
