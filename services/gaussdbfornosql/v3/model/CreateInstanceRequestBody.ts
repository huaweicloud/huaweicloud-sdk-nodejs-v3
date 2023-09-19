import { AvailabilityZoneDetail } from './AvailabilityZoneDetail';
import { BackupStrategyOption } from './BackupStrategyOption';
import { ChargeInfoOption } from './ChargeInfoOption';
import { CreateInstanceFlavorOption } from './CreateInstanceFlavorOption';
import { DatastoreOption } from './DatastoreOption';
import { RestoreInfo } from './RestoreInfo';


export class CreateInstanceRequestBody {
    public name?: string;
    public datastore?: DatastoreOption;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public password?: string;
    public mode?: string;
    public flavor?: Array<CreateInstanceFlavorOption>;
    private 'configuration_id'?: string;
    private 'backup_strategy'?: BackupStrategyOption;
    private 'enterprise_project_id'?: string;
    private 'dedicated_resource_id'?: string;
    private 'ssl_option'?: string;
    private 'charge_info'?: ChargeInfoOption;
    private 'restore_info'?: RestoreInfo;
    public port?: string;
    private 'availability_zone_detail'?: AvailabilityZoneDetail;
    public constructor(name?: string, datastore?: DatastoreOption, region?: string, availabilityZone?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, password?: string, mode?: string, flavor?: Array<CreateInstanceFlavorOption>) { 
        this['name'] = name;
        this['datastore'] = datastore;
        this['region'] = region;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['password'] = password;
        this['mode'] = mode;
        this['flavor'] = flavor;
    }
    public withName(name: string): CreateInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withDatastore(datastore: DatastoreOption): CreateInstanceRequestBody {
        this['datastore'] = datastore;
        return this;
    }
    public withRegion(region: string): CreateInstanceRequestBody {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateInstanceRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): CreateInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceRequestBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPassword(password: string): CreateInstanceRequestBody {
        this['password'] = password;
        return this;
    }
    public withMode(mode: string): CreateInstanceRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withFlavor(flavor: Array<CreateInstanceFlavorOption>): CreateInstanceRequestBody {
        this['flavor'] = flavor;
        return this;
    }
    public withConfigurationId(configurationId: string): CreateInstanceRequestBody {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBackupStrategy(backupStrategy: BackupStrategyOption): CreateInstanceRequestBody {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategyOption  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategyOption | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): CreateInstanceRequestBody {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withSslOption(sslOption: string): CreateInstanceRequestBody {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: string  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): string | undefined {
        return this['ssl_option'];
    }
    public withChargeInfo(chargeInfo: ChargeInfoOption): CreateInstanceRequestBody {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfoOption  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfoOption | undefined {
        return this['charge_info'];
    }
    public withRestoreInfo(restoreInfo: RestoreInfo): CreateInstanceRequestBody {
        this['restore_info'] = restoreInfo;
        return this;
    }
    public set restoreInfo(restoreInfo: RestoreInfo  | undefined) {
        this['restore_info'] = restoreInfo;
    }
    public get restoreInfo(): RestoreInfo | undefined {
        return this['restore_info'];
    }
    public withPort(port: string): CreateInstanceRequestBody {
        this['port'] = port;
        return this;
    }
    public withAvailabilityZoneDetail(availabilityZoneDetail: AvailabilityZoneDetail): CreateInstanceRequestBody {
        this['availability_zone_detail'] = availabilityZoneDetail;
        return this;
    }
    public set availabilityZoneDetail(availabilityZoneDetail: AvailabilityZoneDetail  | undefined) {
        this['availability_zone_detail'] = availabilityZoneDetail;
    }
    public get availabilityZoneDetail(): AvailabilityZoneDetail | undefined {
        return this['availability_zone_detail'];
    }
}