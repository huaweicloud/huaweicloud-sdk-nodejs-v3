import { AssignmentConfigDto } from './AssignmentConfigDto';
import { PortalOptionsDto } from './PortalOptionsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeApplicationResponse extends SdkResponse {
    private 'application_urn'?: string;
    private 'application_provider_urn'?: string;
    private 'assignment_config'?: AssignmentConfigDto;
    private 'created_date'?: number;
    public description?: string;
    private 'instance_urn'?: string;
    public name?: string;
    private 'portal_options'?: PortalOptionsDto;
    public status?: DescribeApplicationResponseStatusEnum | string;
    private 'application_account'?: string;
    public constructor() { 
        super();
    }
    public withApplicationUrn(applicationUrn: string): DescribeApplicationResponse {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withApplicationProviderUrn(applicationProviderUrn: string): DescribeApplicationResponse {
        this['application_provider_urn'] = applicationProviderUrn;
        return this;
    }
    public set applicationProviderUrn(applicationProviderUrn: string  | undefined) {
        this['application_provider_urn'] = applicationProviderUrn;
    }
    public get applicationProviderUrn(): string | undefined {
        return this['application_provider_urn'];
    }
    public withAssignmentConfig(assignmentConfig: AssignmentConfigDto): DescribeApplicationResponse {
        this['assignment_config'] = assignmentConfig;
        return this;
    }
    public set assignmentConfig(assignmentConfig: AssignmentConfigDto  | undefined) {
        this['assignment_config'] = assignmentConfig;
    }
    public get assignmentConfig(): AssignmentConfigDto | undefined {
        return this['assignment_config'];
    }
    public withCreatedDate(createdDate: number): DescribeApplicationResponse {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withDescription(description: string): DescribeApplicationResponse {
        this['description'] = description;
        return this;
    }
    public withInstanceUrn(instanceUrn: string): DescribeApplicationResponse {
        this['instance_urn'] = instanceUrn;
        return this;
    }
    public set instanceUrn(instanceUrn: string  | undefined) {
        this['instance_urn'] = instanceUrn;
    }
    public get instanceUrn(): string | undefined {
        return this['instance_urn'];
    }
    public withName(name: string): DescribeApplicationResponse {
        this['name'] = name;
        return this;
    }
    public withPortalOptions(portalOptions: PortalOptionsDto): DescribeApplicationResponse {
        this['portal_options'] = portalOptions;
        return this;
    }
    public set portalOptions(portalOptions: PortalOptionsDto  | undefined) {
        this['portal_options'] = portalOptions;
    }
    public get portalOptions(): PortalOptionsDto | undefined {
        return this['portal_options'];
    }
    public withStatus(status: DescribeApplicationResponseStatusEnum | string): DescribeApplicationResponse {
        this['status'] = status;
        return this;
    }
    public withApplicationAccount(applicationAccount: string): DescribeApplicationResponse {
        this['application_account'] = applicationAccount;
        return this;
    }
    public set applicationAccount(applicationAccount: string  | undefined) {
        this['application_account'] = applicationAccount;
    }
    public get applicationAccount(): string | undefined {
        return this['application_account'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DescribeApplicationResponseStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
