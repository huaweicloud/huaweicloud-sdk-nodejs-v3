import { InstanceAccessControlAttributeConfigurationDto } from './InstanceAccessControlAttributeConfigurationDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeInstanceAccessControlAttributeConfigurationResponse extends SdkResponse {
    private 'instance_access_control_attribute_configuration'?: InstanceAccessControlAttributeConfigurationDto;
    public status?: DescribeInstanceAccessControlAttributeConfigurationResponseStatusEnum | string;
    private 'status_reason'?: string;
    public constructor() { 
        super();
    }
    public withInstanceAccessControlAttributeConfiguration(instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfigurationDto): DescribeInstanceAccessControlAttributeConfigurationResponse {
        this['instance_access_control_attribute_configuration'] = instanceAccessControlAttributeConfiguration;
        return this;
    }
    public set instanceAccessControlAttributeConfiguration(instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfigurationDto  | undefined) {
        this['instance_access_control_attribute_configuration'] = instanceAccessControlAttributeConfiguration;
    }
    public get instanceAccessControlAttributeConfiguration(): InstanceAccessControlAttributeConfigurationDto | undefined {
        return this['instance_access_control_attribute_configuration'];
    }
    public withStatus(status: DescribeInstanceAccessControlAttributeConfigurationResponseStatusEnum | string): DescribeInstanceAccessControlAttributeConfigurationResponse {
        this['status'] = status;
        return this;
    }
    public withStatusReason(statusReason: string): DescribeInstanceAccessControlAttributeConfigurationResponse {
        this['status_reason'] = statusReason;
        return this;
    }
    public set statusReason(statusReason: string  | undefined) {
        this['status_reason'] = statusReason;
    }
    public get statusReason(): string | undefined {
        return this['status_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DescribeInstanceAccessControlAttributeConfigurationResponseStatusEnum {
    ENABLED = 'ENABLED',
    CREATION_IN_PROGRESS = 'CREATION_IN_PROGRESS',
    CREATION_FAILED = 'CREATION_FAILED'
}
