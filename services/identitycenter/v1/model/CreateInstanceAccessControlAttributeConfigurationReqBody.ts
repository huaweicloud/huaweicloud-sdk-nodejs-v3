import { InstanceAccessControlAttributeConfigurationDto } from './InstanceAccessControlAttributeConfigurationDto';


export class CreateInstanceAccessControlAttributeConfigurationReqBody {
    private 'instance_access_control_attribute_configuration'?: InstanceAccessControlAttributeConfigurationDto;
    public constructor(instanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfigurationDto) { 
        this['instance_access_control_attribute_configuration'] = instanceAccessControlAttributeConfiguration;
    }
    public withInstanceAccessControlAttributeConfiguration(instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfigurationDto): CreateInstanceAccessControlAttributeConfigurationReqBody {
        this['instance_access_control_attribute_configuration'] = instanceAccessControlAttributeConfiguration;
        return this;
    }
    public set instanceAccessControlAttributeConfiguration(instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfigurationDto  | undefined) {
        this['instance_access_control_attribute_configuration'] = instanceAccessControlAttributeConfiguration;
    }
    public get instanceAccessControlAttributeConfiguration(): InstanceAccessControlAttributeConfigurationDto | undefined {
        return this['instance_access_control_attribute_configuration'];
    }
}