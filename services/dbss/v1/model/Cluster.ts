import { InstanceActivateInfo } from './InstanceActivateInfo';
import { ServerList } from './ServerList';


export class Cluster {
    private 'activate_info'?: InstanceActivateInfo;
    private 'charge_model'?: ClusterChargeModelEnum | string;
    public comment?: string;
    public created?: number;
    private 'deploy_mode'?: ClusterDeployModeEnum | string;
    public detail?: ServerList;
    private 'enterprise_project_id'?: string;
    public expired?: number;
    private 'float_ip'?: string;
    private 'instance_id'?: string;
    private 'is_active_standby'?: boolean;
    private 'keep_days'?: string;
    public name?: string;
    private 'new_version'?: string;
    private 'public_ip'?: string;
    private 'remain_days'?: string;
    public constructor() { 
    }
    public withActivateInfo(activateInfo: InstanceActivateInfo): Cluster {
        this['activate_info'] = activateInfo;
        return this;
    }
    public set activateInfo(activateInfo: InstanceActivateInfo  | undefined) {
        this['activate_info'] = activateInfo;
    }
    public get activateInfo(): InstanceActivateInfo | undefined {
        return this['activate_info'];
    }
    public withChargeModel(chargeModel: ClusterChargeModelEnum | string): Cluster {
        this['charge_model'] = chargeModel;
        return this;
    }
    public set chargeModel(chargeModel: ClusterChargeModelEnum | string  | undefined) {
        this['charge_model'] = chargeModel;
    }
    public get chargeModel(): ClusterChargeModelEnum | string | undefined {
        return this['charge_model'];
    }
    public withComment(comment: string): Cluster {
        this['comment'] = comment;
        return this;
    }
    public withCreated(created: number): Cluster {
        this['created'] = created;
        return this;
    }
    public withDeployMode(deployMode: ClusterDeployModeEnum | string): Cluster {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: ClusterDeployModeEnum | string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): ClusterDeployModeEnum | string | undefined {
        return this['deploy_mode'];
    }
    public withDetail(detail: ServerList): Cluster {
        this['detail'] = detail;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Cluster {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExpired(expired: number): Cluster {
        this['expired'] = expired;
        return this;
    }
    public withFloatIp(floatIp: string): Cluster {
        this['float_ip'] = floatIp;
        return this;
    }
    public set floatIp(floatIp: string  | undefined) {
        this['float_ip'] = floatIp;
    }
    public get floatIp(): string | undefined {
        return this['float_ip'];
    }
    public withInstanceId(instanceId: string): Cluster {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIsActiveStandby(isActiveStandby: boolean): Cluster {
        this['is_active_standby'] = isActiveStandby;
        return this;
    }
    public set isActiveStandby(isActiveStandby: boolean  | undefined) {
        this['is_active_standby'] = isActiveStandby;
    }
    public get isActiveStandby(): boolean | undefined {
        return this['is_active_standby'];
    }
    public withKeepDays(keepDays: string): Cluster {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: string  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): string | undefined {
        return this['keep_days'];
    }
    public withName(name: string): Cluster {
        this['name'] = name;
        return this;
    }
    public withNewVersion(newVersion: string): Cluster {
        this['new_version'] = newVersion;
        return this;
    }
    public set newVersion(newVersion: string  | undefined) {
        this['new_version'] = newVersion;
    }
    public get newVersion(): string | undefined {
        return this['new_version'];
    }
    public withPublicIp(publicIp: string): Cluster {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withRemainDays(remainDays: string): Cluster {
        this['remain_days'] = remainDays;
        return this;
    }
    public set remainDays(remainDays: string  | undefined) {
        this['remain_days'] = remainDays;
    }
    public get remainDays(): string | undefined {
        return this['remain_days'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterChargeModelEnum {
    PERIOD = 'Period',
    DEMAND = 'Demand',
    TEST = 'Test'
}
/**
    * @export
    * @enum {string}
    */
export enum ClusterDeployModeEnum {
    CLOUD = 'CLOUD',
    OUTSIDE = 'OUTSIDE'
}
