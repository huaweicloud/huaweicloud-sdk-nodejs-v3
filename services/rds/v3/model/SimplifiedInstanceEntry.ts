

export class SimplifiedInstanceEntry {
    public id?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'instance_status'?: string;
    public frozen?: boolean;
    public type?: string;
    private 'pay_model'?: string;
    private 'spec_code'?: string;
    private 'availability_zone_ids'?: Array<string>;
    private 'read_only_instances'?: Array<string>;
    private 'current_actions'?: Array<string>;
    private 'volume_type'?: string;
    private 'volume_size'?: number;
    private 'enterprise_project_id'?: string;
    public constructor(id?: string, name?: string, engineName?: string, engineVersion?: string, instanceStatus?: string, frozen?: boolean, type?: string, payModel?: string, specCode?: string, availabilityZoneIds?: Array<string>, readOnlyInstances?: Array<string>, currentActions?: Array<string>, volumeType?: string, volumeSize?: number, enterpriseProjectId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['engine_name'] = engineName;
        this['engine_version'] = engineVersion;
        this['instance_status'] = instanceStatus;
        this['frozen'] = frozen;
        this['type'] = type;
        this['pay_model'] = payModel;
        this['spec_code'] = specCode;
        this['availability_zone_ids'] = availabilityZoneIds;
        this['read_only_instances'] = readOnlyInstances;
        this['current_actions'] = currentActions;
        this['volume_type'] = volumeType;
        this['volume_size'] = volumeSize;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): SimplifiedInstanceEntry {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SimplifiedInstanceEntry {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): SimplifiedInstanceEntry {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): SimplifiedInstanceEntry {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withInstanceStatus(instanceStatus: string): SimplifiedInstanceEntry {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withFrozen(frozen: boolean): SimplifiedInstanceEntry {
        this['frozen'] = frozen;
        return this;
    }
    public withType(type: string): SimplifiedInstanceEntry {
        this['type'] = type;
        return this;
    }
    public withPayModel(payModel: string): SimplifiedInstanceEntry {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withSpecCode(specCode: string): SimplifiedInstanceEntry {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): SimplifiedInstanceEntry {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withReadOnlyInstances(readOnlyInstances: Array<string>): SimplifiedInstanceEntry {
        this['read_only_instances'] = readOnlyInstances;
        return this;
    }
    public set readOnlyInstances(readOnlyInstances: Array<string>  | undefined) {
        this['read_only_instances'] = readOnlyInstances;
    }
    public get readOnlyInstances(): Array<string> | undefined {
        return this['read_only_instances'];
    }
    public withCurrentActions(currentActions: Array<string>): SimplifiedInstanceEntry {
        this['current_actions'] = currentActions;
        return this;
    }
    public set currentActions(currentActions: Array<string>  | undefined) {
        this['current_actions'] = currentActions;
    }
    public get currentActions(): Array<string> | undefined {
        return this['current_actions'];
    }
    public withVolumeType(volumeType: string): SimplifiedInstanceEntry {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeSize(volumeSize: number): SimplifiedInstanceEntry {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SimplifiedInstanceEntry {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}