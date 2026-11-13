import { SupabaseAppBasicConfig } from './SupabaseAppBasicConfig';
import { SupabaseExistingInstanceRequest } from './SupabaseExistingInstanceRequest';
import { SupabaseInstanceCreateRequest } from './SupabaseInstanceCreateRequest';
import { SupabaseStorageComponentConfig } from './SupabaseStorageComponentConfig';


export class CreateSupabaseApplicationRequestBody {
    public name?: string;
    private 'basic_config'?: SupabaseAppBasicConfig;
    public version?: string;
    public mode?: CreateSupabaseApplicationRequestBodyModeEnum | string;
    private 'flavor_ref'?: string;
    private 'availability_zone'?: string;
    private 'data_vip'?: string;
    private 'security_group_id'?: string;
    public password?: string;
    private 'storage_component'?: SupabaseStorageComponentConfig;
    private 'manage_type'?: CreateSupabaseApplicationRequestBodyManageTypeEnum | string;
    private 'managed_instance'?: SupabaseInstanceCreateRequest;
    private 'existing_instance'?: SupabaseExistingInstanceRequest;
    public constructor(name?: string, basicConfig?: SupabaseAppBasicConfig, version?: string, mode?: string, flavorRef?: string, availabilityZone?: string, password?: string, storageComponent?: SupabaseStorageComponentConfig) { 
        this['name'] = name;
        this['basic_config'] = basicConfig;
        this['version'] = version;
        this['mode'] = mode;
        this['flavor_ref'] = flavorRef;
        this['availability_zone'] = availabilityZone;
        this['password'] = password;
        this['storage_component'] = storageComponent;
    }
    public withName(name: string): CreateSupabaseApplicationRequestBody {
        this['name'] = name;
        return this;
    }
    public withBasicConfig(basicConfig: SupabaseAppBasicConfig): CreateSupabaseApplicationRequestBody {
        this['basic_config'] = basicConfig;
        return this;
    }
    public set basicConfig(basicConfig: SupabaseAppBasicConfig  | undefined) {
        this['basic_config'] = basicConfig;
    }
    public get basicConfig(): SupabaseAppBasicConfig | undefined {
        return this['basic_config'];
    }
    public withVersion(version: string): CreateSupabaseApplicationRequestBody {
        this['version'] = version;
        return this;
    }
    public withMode(mode: CreateSupabaseApplicationRequestBodyModeEnum | string): CreateSupabaseApplicationRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withFlavorRef(flavorRef: string): CreateSupabaseApplicationRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateSupabaseApplicationRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDataVip(dataVip: string): CreateSupabaseApplicationRequestBody {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateSupabaseApplicationRequestBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPassword(password: string): CreateSupabaseApplicationRequestBody {
        this['password'] = password;
        return this;
    }
    public withStorageComponent(storageComponent: SupabaseStorageComponentConfig): CreateSupabaseApplicationRequestBody {
        this['storage_component'] = storageComponent;
        return this;
    }
    public set storageComponent(storageComponent: SupabaseStorageComponentConfig  | undefined) {
        this['storage_component'] = storageComponent;
    }
    public get storageComponent(): SupabaseStorageComponentConfig | undefined {
        return this['storage_component'];
    }
    public withManageType(manageType: CreateSupabaseApplicationRequestBodyManageTypeEnum | string): CreateSupabaseApplicationRequestBody {
        this['manage_type'] = manageType;
        return this;
    }
    public set manageType(manageType: CreateSupabaseApplicationRequestBodyManageTypeEnum | string  | undefined) {
        this['manage_type'] = manageType;
    }
    public get manageType(): CreateSupabaseApplicationRequestBodyManageTypeEnum | string | undefined {
        return this['manage_type'];
    }
    public withManagedInstance(managedInstance: SupabaseInstanceCreateRequest): CreateSupabaseApplicationRequestBody {
        this['managed_instance'] = managedInstance;
        return this;
    }
    public set managedInstance(managedInstance: SupabaseInstanceCreateRequest  | undefined) {
        this['managed_instance'] = managedInstance;
    }
    public get managedInstance(): SupabaseInstanceCreateRequest | undefined {
        return this['managed_instance'];
    }
    public withExistingInstance(existingInstance: SupabaseExistingInstanceRequest): CreateSupabaseApplicationRequestBody {
        this['existing_instance'] = existingInstance;
        return this;
    }
    public set existingInstance(existingInstance: SupabaseExistingInstanceRequest  | undefined) {
        this['existing_instance'] = existingInstance;
    }
    public get existingInstance(): SupabaseExistingInstanceRequest | undefined {
        return this['existing_instance'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSupabaseApplicationRequestBodyModeEnum {
    SINGLE = 'Single'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSupabaseApplicationRequestBodyManageTypeEnum {
    NEWLY_INSTANCE = 'newly_instance',
    EXISTED_INSTANCE = 'existed_instance'
}
