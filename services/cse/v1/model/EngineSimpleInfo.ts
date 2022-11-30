import { EngineReference } from './EngineReference';
import { EntrypointItem } from './EntrypointItem';


export class EngineSimpleInfo {
    public id?: string;
    public name?: string;
    private 'enterpris_project_id'?: string | undefined;
    private 'enterprise_project_name'?: string | undefined;
    public type?: EngineSimpleInfoTypeEnum;
    public description?: string;
    public flavor?: EngineSimpleInfoFlavorEnum;
    public payment?: string;
    private 'auth_type'?: EngineSimpleInfoAuthTypeEnum | undefined;
    public status?: EngineSimpleInfoStatusEnum;
    private 'external_address'?: string | undefined;
    private 'service_endpoint'?: { [key: string]: EntrypointItem; } | undefined;
    private 'public_address'?: string | undefined;
    private 'public_service_endpoint'?: { [key: string]: EntrypointItem; } | undefined;
    private 'total_instance'?: number | undefined;
    private 'used_instance'?: number | undefined;
    private 'available_instance'?: number | undefined;
    public version?: string;
    private 'latest_version'?: string | undefined;
    private 'create_time'?: number | undefined;
    private 'due_to'?: number | undefined;
    private 'latest_job_id'?: number | undefined;
    private 'engine_additional_actions'?: Array<EngineSimpleInfoEngineAdditionalActionsEnum> | undefined;
    private 'spec_type'?: EngineSimpleInfoSpecTypeEnum | undefined;
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
    public withEnterprisProjectId(enterprisProjectId: string): EngineSimpleInfo {
        this['enterpris_project_id'] = enterprisProjectId;
        return this;
    }
    public set enterprisProjectId(enterprisProjectId: string | undefined) {
        this['enterpris_project_id'] = enterprisProjectId;
    }
    public get enterprisProjectId() {
        return this['enterpris_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): EngineSimpleInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName() {
        return this['enterprise_project_name'];
    }
    public withType(type: EngineSimpleInfoTypeEnum): EngineSimpleInfo {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): EngineSimpleInfo {
        this['description'] = description;
        return this;
    }
    public withFlavor(flavor: EngineSimpleInfoFlavorEnum): EngineSimpleInfo {
        this['flavor'] = flavor;
        return this;
    }
    public withPayment(payment: string): EngineSimpleInfo {
        this['payment'] = payment;
        return this;
    }
    public withAuthType(authType: EngineSimpleInfoAuthTypeEnum): EngineSimpleInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: EngineSimpleInfoAuthTypeEnum | undefined) {
        this['auth_type'] = authType;
    }
    public get authType() {
        return this['auth_type'];
    }
    public withStatus(status: EngineSimpleInfoStatusEnum): EngineSimpleInfo {
        this['status'] = status;
        return this;
    }
    public withExternalAddress(externalAddress: string): EngineSimpleInfo {
        this['external_address'] = externalAddress;
        return this;
    }
    public set externalAddress(externalAddress: string | undefined) {
        this['external_address'] = externalAddress;
    }
    public get externalAddress() {
        return this['external_address'];
    }
    public withServiceEndpoint(serviceEndpoint: { [key: string]: EntrypointItem; }): EngineSimpleInfo {
        this['service_endpoint'] = serviceEndpoint;
        return this;
    }
    public set serviceEndpoint(serviceEndpoint: { [key: string]: EntrypointItem; } | undefined) {
        this['service_endpoint'] = serviceEndpoint;
    }
    public get serviceEndpoint() {
        return this['service_endpoint'];
    }
    public withPublicAddress(publicAddress: string): EngineSimpleInfo {
        this['public_address'] = publicAddress;
        return this;
    }
    public set publicAddress(publicAddress: string | undefined) {
        this['public_address'] = publicAddress;
    }
    public get publicAddress() {
        return this['public_address'];
    }
    public withPublicServiceEndpoint(publicServiceEndpoint: { [key: string]: EntrypointItem; }): EngineSimpleInfo {
        this['public_service_endpoint'] = publicServiceEndpoint;
        return this;
    }
    public set publicServiceEndpoint(publicServiceEndpoint: { [key: string]: EntrypointItem; } | undefined) {
        this['public_service_endpoint'] = publicServiceEndpoint;
    }
    public get publicServiceEndpoint() {
        return this['public_service_endpoint'];
    }
    public withTotalInstance(totalInstance: number): EngineSimpleInfo {
        this['total_instance'] = totalInstance;
        return this;
    }
    public set totalInstance(totalInstance: number | undefined) {
        this['total_instance'] = totalInstance;
    }
    public get totalInstance() {
        return this['total_instance'];
    }
    public withUsedInstance(usedInstance: number): EngineSimpleInfo {
        this['used_instance'] = usedInstance;
        return this;
    }
    public set usedInstance(usedInstance: number | undefined) {
        this['used_instance'] = usedInstance;
    }
    public get usedInstance() {
        return this['used_instance'];
    }
    public withAvailableInstance(availableInstance: number): EngineSimpleInfo {
        this['available_instance'] = availableInstance;
        return this;
    }
    public set availableInstance(availableInstance: number | undefined) {
        this['available_instance'] = availableInstance;
    }
    public get availableInstance() {
        return this['available_instance'];
    }
    public withVersion(version: string): EngineSimpleInfo {
        this['version'] = version;
        return this;
    }
    public withLatestVersion(latestVersion: string): EngineSimpleInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion() {
        return this['latest_version'];
    }
    public withCreateTime(createTime: number): EngineSimpleInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withDueTo(dueTo: number): EngineSimpleInfo {
        this['due_to'] = dueTo;
        return this;
    }
    public set dueTo(dueTo: number | undefined) {
        this['due_to'] = dueTo;
    }
    public get dueTo() {
        return this['due_to'];
    }
    public withLatestJobId(latestJobId: number): EngineSimpleInfo {
        this['latest_job_id'] = latestJobId;
        return this;
    }
    public set latestJobId(latestJobId: number | undefined) {
        this['latest_job_id'] = latestJobId;
    }
    public get latestJobId() {
        return this['latest_job_id'];
    }
    public withEngineAdditionalActions(engineAdditionalActions: Array<EngineSimpleInfoEngineAdditionalActionsEnum>): EngineSimpleInfo {
        this['engine_additional_actions'] = engineAdditionalActions;
        return this;
    }
    public set engineAdditionalActions(engineAdditionalActions: Array<EngineSimpleInfoEngineAdditionalActionsEnum> | undefined) {
        this['engine_additional_actions'] = engineAdditionalActions;
    }
    public get engineAdditionalActions() {
        return this['engine_additional_actions'];
    }
    public withSpecType(specType: EngineSimpleInfoSpecTypeEnum): EngineSimpleInfo {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: EngineSimpleInfoSpecTypeEnum | undefined) {
        this['spec_type'] = specType;
    }
    public get specType() {
        return this['spec_type'];
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
    CSE_S1_XLARGE2 = 'cse.s1.xlarge2'
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
