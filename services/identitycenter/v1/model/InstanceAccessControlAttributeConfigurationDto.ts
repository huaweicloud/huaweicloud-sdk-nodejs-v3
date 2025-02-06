import { AccessControlAttributeDto } from './AccessControlAttributeDto';


export class InstanceAccessControlAttributeConfigurationDto {
    private 'access_control_attributes'?: Array<AccessControlAttributeDto>;
    public constructor(accessControlAttributes?: Array<AccessControlAttributeDto>) { 
        this['access_control_attributes'] = accessControlAttributes;
    }
    public withAccessControlAttributes(accessControlAttributes: Array<AccessControlAttributeDto>): InstanceAccessControlAttributeConfigurationDto {
        this['access_control_attributes'] = accessControlAttributes;
        return this;
    }
    public set accessControlAttributes(accessControlAttributes: Array<AccessControlAttributeDto>  | undefined) {
        this['access_control_attributes'] = accessControlAttributes;
    }
    public get accessControlAttributes(): Array<AccessControlAttributeDto> | undefined {
        return this['access_control_attributes'];
    }
}