import { EngineExternalEntrypoint } from './EngineExternalEntrypoint';
import { EngineReference } from './EngineReference';
import { Spec } from './Spec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'auth_type'?: ShowEngineResponseAuthTypeEnum | string;
    public flavor?: string;
    public payment?: string;
    public version?: string;
    private 'latest_version'?: string;
    public status?: ShowEngineResponseStatusEnum | string;
    private 'be_default'?: boolean;
    private 'create_user'?: string;
    private 'create_time'?: number;
    private 'cce_spec'?: Spec;
    private 'external_entrypoint'?: EngineExternalEntrypoint;
    public reference?: EngineReference;
    private 'latest_job_id'?: number;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'engine_additional_actions'?: Array<ShowEngineResponseEngineAdditionalActionsEnum> | Array<string>;
    private 'spec_type'?: ShowEngineResponseSpecTypeEnum | string;
    public type?: ShowEngineResponseTypeEnum | string;
    private 'project_id'?: string;
    private 'vm_ids'?: Array<string>;
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
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ShowEngineResponseAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ShowEngineResponseAuthTypeEnum | string | undefined {
        return this['auth_type'];
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
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
    public withStatus(status: ShowEngineResponseStatusEnum | string): ShowEngineResponse {
        this['status'] = status;
        return this;
    }
    public withBeDefault(beDefault: boolean): ShowEngineResponse {
        this['be_default'] = beDefault;
        return this;
    }
    public set beDefault(beDefault: boolean  | undefined) {
        this['be_default'] = beDefault;
    }
    public get beDefault(): boolean | undefined {
        return this['be_default'];
    }
    public withCreateUser(createUser: string): ShowEngineResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): ShowEngineResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCceSpec(cceSpec: Spec): ShowEngineResponse {
        this['cce_spec'] = cceSpec;
        return this;
    }
    public set cceSpec(cceSpec: Spec  | undefined) {
        this['cce_spec'] = cceSpec;
    }
    public get cceSpec(): Spec | undefined {
        return this['cce_spec'];
    }
    public withExternalEntrypoint(externalEntrypoint: EngineExternalEntrypoint): ShowEngineResponse {
        this['external_entrypoint'] = externalEntrypoint;
        return this;
    }
    public set externalEntrypoint(externalEntrypoint: EngineExternalEntrypoint  | undefined) {
        this['external_entrypoint'] = externalEntrypoint;
    }
    public get externalEntrypoint(): EngineExternalEntrypoint | undefined {
        return this['external_entrypoint'];
    }
    public withReference(reference: EngineReference): ShowEngineResponse {
        this['reference'] = reference;
        return this;
    }
    public withLatestJobId(latestJobId: number): ShowEngineResponse {
        this['latest_job_id'] = latestJobId;
        return this;
    }
    public set latestJobId(latestJobId: number  | undefined) {
        this['latest_job_id'] = latestJobId;
    }
    public get latestJobId(): number | undefined {
        return this['latest_job_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowEngineResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ShowEngineResponse {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withEngineAdditionalActions(engineAdditionalActions: Array<ShowEngineResponseEngineAdditionalActionsEnum> | Array<string>): ShowEngineResponse {
        this['engine_additional_actions'] = engineAdditionalActions;
        return this;
    }
    public set engineAdditionalActions(engineAdditionalActions: Array<ShowEngineResponseEngineAdditionalActionsEnum> | Array<string>  | undefined) {
        this['engine_additional_actions'] = engineAdditionalActions;
    }
    public get engineAdditionalActions(): Array<ShowEngineResponseEngineAdditionalActionsEnum> | Array<string> | undefined {
        return this['engine_additional_actions'];
    }
    public withSpecType(specType: ShowEngineResponseSpecTypeEnum | string): ShowEngineResponse {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: ShowEngineResponseSpecTypeEnum | string  | undefined) {
        this['spec_type'] = specType;
    }
    public get specType(): ShowEngineResponseSpecTypeEnum | string | undefined {
        return this['spec_type'];
    }
    public withType(type: ShowEngineResponseTypeEnum | string): ShowEngineResponse {
        this['type'] = type;
        return this;
    }
    public withProjectId(projectId: string): ShowEngineResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVmIds(vmIds: Array<string>): ShowEngineResponse {
        this['vm_ids'] = vmIds;
        return this;
    }
    public set vmIds(vmIds: Array<string>  | undefined) {
        this['vm_ids'] = vmIds;
    }
    public get vmIds(): Array<string> | undefined {
        return this['vm_ids'];
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
    CCE = 'CCE',
    CSE = 'CSE',
    SPRINGCLOUD = 'SpringCloud'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowEngineResponseTypeEnum {
    CSE = 'CSE',
    CSE_SHARE = 'CSE_Share'
}
