import { CommonConfiguration } from './CommonConfiguration';
import { LoggingConfiguration } from './LoggingConfiguration';
import { OrganizationStructureBaseLineRsp } from './OrganizationStructureBaseLineRsp';
import { RegionConfigurationList } from './RegionConfigurationList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLandingZoneConfigurationResponse extends SdkResponse {
    private 'common_configuration'?: CommonConfiguration;
    private 'logging_configuration'?: LoggingConfiguration;
    private 'organization_structure'?: Array<OrganizationStructureBaseLineRsp>;
    public regions?: Array<RegionConfigurationList>;
    public constructor() { 
        super();
    }
    public withCommonConfiguration(commonConfiguration: CommonConfiguration): ShowLandingZoneConfigurationResponse {
        this['common_configuration'] = commonConfiguration;
        return this;
    }
    public set commonConfiguration(commonConfiguration: CommonConfiguration  | undefined) {
        this['common_configuration'] = commonConfiguration;
    }
    public get commonConfiguration(): CommonConfiguration | undefined {
        return this['common_configuration'];
    }
    public withLoggingConfiguration(loggingConfiguration: LoggingConfiguration): ShowLandingZoneConfigurationResponse {
        this['logging_configuration'] = loggingConfiguration;
        return this;
    }
    public set loggingConfiguration(loggingConfiguration: LoggingConfiguration  | undefined) {
        this['logging_configuration'] = loggingConfiguration;
    }
    public get loggingConfiguration(): LoggingConfiguration | undefined {
        return this['logging_configuration'];
    }
    public withOrganizationStructure(organizationStructure: Array<OrganizationStructureBaseLineRsp>): ShowLandingZoneConfigurationResponse {
        this['organization_structure'] = organizationStructure;
        return this;
    }
    public set organizationStructure(organizationStructure: Array<OrganizationStructureBaseLineRsp>  | undefined) {
        this['organization_structure'] = organizationStructure;
    }
    public get organizationStructure(): Array<OrganizationStructureBaseLineRsp> | undefined {
        return this['organization_structure'];
    }
    public withRegions(regions: Array<RegionConfigurationList>): ShowLandingZoneConfigurationResponse {
        this['regions'] = regions;
        return this;
    }
}