import { LoggingConfiguration } from './LoggingConfiguration';
import { OrganizationStructureBaseLine } from './OrganizationStructureBaseLine';
import { RegionConfigurationList } from './RegionConfigurationList';


export class SetupLandingZoneReqBody {
    private 'identity_store_email'?: string;
    private 'home_region'?: string;
    private 'setup_landing_zone_action_type'?: SetupLandingZoneReqBodySetupLandingZoneActionTypeEnum | string;
    private 'region_configuration_list'?: Array<RegionConfigurationList>;
    private 'identity_center_status'?: SetupLandingZoneReqBodyIdentityCenterStatusEnum | string;
    private 'organization_structure_type'?: SetupLandingZoneReqBodyOrganizationStructureTypeEnum | string;
    private 'organization_structure'?: Array<OrganizationStructureBaseLine>;
    private 'deny_ungoverned_regions'?: boolean;
    private 'cloud_trail_type'?: boolean;
    private 'kms_key_id'?: string;
    private 'logging_configuration'?: LoggingConfiguration;
    private 'baseline_version'?: string;
    public constructor(homeRegion?: string, setupLandingZoneActionType?: string, regionConfigurationList?: Array<RegionConfigurationList>, organizationStructure?: Array<OrganizationStructureBaseLine>, loggingConfiguration?: LoggingConfiguration) { 
        this['home_region'] = homeRegion;
        this['setup_landing_zone_action_type'] = setupLandingZoneActionType;
        this['region_configuration_list'] = regionConfigurationList;
        this['organization_structure'] = organizationStructure;
        this['logging_configuration'] = loggingConfiguration;
    }
    public withIdentityStoreEmail(identityStoreEmail: string): SetupLandingZoneReqBody {
        this['identity_store_email'] = identityStoreEmail;
        return this;
    }
    public set identityStoreEmail(identityStoreEmail: string  | undefined) {
        this['identity_store_email'] = identityStoreEmail;
    }
    public get identityStoreEmail(): string | undefined {
        return this['identity_store_email'];
    }
    public withHomeRegion(homeRegion: string): SetupLandingZoneReqBody {
        this['home_region'] = homeRegion;
        return this;
    }
    public set homeRegion(homeRegion: string  | undefined) {
        this['home_region'] = homeRegion;
    }
    public get homeRegion(): string | undefined {
        return this['home_region'];
    }
    public withSetupLandingZoneActionType(setupLandingZoneActionType: SetupLandingZoneReqBodySetupLandingZoneActionTypeEnum | string): SetupLandingZoneReqBody {
        this['setup_landing_zone_action_type'] = setupLandingZoneActionType;
        return this;
    }
    public set setupLandingZoneActionType(setupLandingZoneActionType: SetupLandingZoneReqBodySetupLandingZoneActionTypeEnum | string  | undefined) {
        this['setup_landing_zone_action_type'] = setupLandingZoneActionType;
    }
    public get setupLandingZoneActionType(): SetupLandingZoneReqBodySetupLandingZoneActionTypeEnum | string | undefined {
        return this['setup_landing_zone_action_type'];
    }
    public withRegionConfigurationList(regionConfigurationList: Array<RegionConfigurationList>): SetupLandingZoneReqBody {
        this['region_configuration_list'] = regionConfigurationList;
        return this;
    }
    public set regionConfigurationList(regionConfigurationList: Array<RegionConfigurationList>  | undefined) {
        this['region_configuration_list'] = regionConfigurationList;
    }
    public get regionConfigurationList(): Array<RegionConfigurationList> | undefined {
        return this['region_configuration_list'];
    }
    public withIdentityCenterStatus(identityCenterStatus: SetupLandingZoneReqBodyIdentityCenterStatusEnum | string): SetupLandingZoneReqBody {
        this['identity_center_status'] = identityCenterStatus;
        return this;
    }
    public set identityCenterStatus(identityCenterStatus: SetupLandingZoneReqBodyIdentityCenterStatusEnum | string  | undefined) {
        this['identity_center_status'] = identityCenterStatus;
    }
    public get identityCenterStatus(): SetupLandingZoneReqBodyIdentityCenterStatusEnum | string | undefined {
        return this['identity_center_status'];
    }
    public withOrganizationStructureType(organizationStructureType: SetupLandingZoneReqBodyOrganizationStructureTypeEnum | string): SetupLandingZoneReqBody {
        this['organization_structure_type'] = organizationStructureType;
        return this;
    }
    public set organizationStructureType(organizationStructureType: SetupLandingZoneReqBodyOrganizationStructureTypeEnum | string  | undefined) {
        this['organization_structure_type'] = organizationStructureType;
    }
    public get organizationStructureType(): SetupLandingZoneReqBodyOrganizationStructureTypeEnum | string | undefined {
        return this['organization_structure_type'];
    }
    public withOrganizationStructure(organizationStructure: Array<OrganizationStructureBaseLine>): SetupLandingZoneReqBody {
        this['organization_structure'] = organizationStructure;
        return this;
    }
    public set organizationStructure(organizationStructure: Array<OrganizationStructureBaseLine>  | undefined) {
        this['organization_structure'] = organizationStructure;
    }
    public get organizationStructure(): Array<OrganizationStructureBaseLine> | undefined {
        return this['organization_structure'];
    }
    public withDenyUngovernedRegions(denyUngovernedRegions: boolean): SetupLandingZoneReqBody {
        this['deny_ungoverned_regions'] = denyUngovernedRegions;
        return this;
    }
    public set denyUngovernedRegions(denyUngovernedRegions: boolean  | undefined) {
        this['deny_ungoverned_regions'] = denyUngovernedRegions;
    }
    public get denyUngovernedRegions(): boolean | undefined {
        return this['deny_ungoverned_regions'];
    }
    public withCloudTrailType(cloudTrailType: boolean): SetupLandingZoneReqBody {
        this['cloud_trail_type'] = cloudTrailType;
        return this;
    }
    public set cloudTrailType(cloudTrailType: boolean  | undefined) {
        this['cloud_trail_type'] = cloudTrailType;
    }
    public get cloudTrailType(): boolean | undefined {
        return this['cloud_trail_type'];
    }
    public withKmsKeyId(kmsKeyId: string): SetupLandingZoneReqBody {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withLoggingConfiguration(loggingConfiguration: LoggingConfiguration): SetupLandingZoneReqBody {
        this['logging_configuration'] = loggingConfiguration;
        return this;
    }
    public set loggingConfiguration(loggingConfiguration: LoggingConfiguration  | undefined) {
        this['logging_configuration'] = loggingConfiguration;
    }
    public get loggingConfiguration(): LoggingConfiguration | undefined {
        return this['logging_configuration'];
    }
    public withBaselineVersion(baselineVersion: string): SetupLandingZoneReqBody {
        this['baseline_version'] = baselineVersion;
        return this;
    }
    public set baselineVersion(baselineVersion: string  | undefined) {
        this['baseline_version'] = baselineVersion;
    }
    public get baselineVersion(): string | undefined {
        return this['baseline_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetupLandingZoneReqBodySetupLandingZoneActionTypeEnum {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    REPAIR = 'REPAIR'
}
/**
    * @export
    * @enum {string}
    */
export enum SetupLandingZoneReqBodyIdentityCenterStatusEnum {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE'
}
/**
    * @export
    * @enum {string}
    */
export enum SetupLandingZoneReqBodyOrganizationStructureTypeEnum {
    STANDARD = 'STANDARD',
    NON_STANDARD = 'NON_STANDARD'
}
