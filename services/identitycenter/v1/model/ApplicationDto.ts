import { AssignmentConfigDto } from './AssignmentConfigDto';
import { PortalOptionsDto } from './PortalOptionsDto';


export class ApplicationDto {
    private 'application_urn'?: string;
    private 'application_provider_urn'?: string;
    private 'assignment_config'?: AssignmentConfigDto;
    private 'created_date'?: number;
    public description?: string;
    private 'instance_urn'?: string;
    public name?: string;
    private 'portal_options'?: PortalOptionsDto;
    public status?: ApplicationDtoStatusEnum | string;
    private 'application_account'?: string;
    public constructor() { 
    }
    public withApplicationUrn(applicationUrn: string): ApplicationDto {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withApplicationProviderUrn(applicationProviderUrn: string): ApplicationDto {
        this['application_provider_urn'] = applicationProviderUrn;
        return this;
    }
    public set applicationProviderUrn(applicationProviderUrn: string  | undefined) {
        this['application_provider_urn'] = applicationProviderUrn;
    }
    public get applicationProviderUrn(): string | undefined {
        return this['application_provider_urn'];
    }
    public withAssignmentConfig(assignmentConfig: AssignmentConfigDto): ApplicationDto {
        this['assignment_config'] = assignmentConfig;
        return this;
    }
    public set assignmentConfig(assignmentConfig: AssignmentConfigDto  | undefined) {
        this['assignment_config'] = assignmentConfig;
    }
    public get assignmentConfig(): AssignmentConfigDto | undefined {
        return this['assignment_config'];
    }
    public withCreatedDate(createdDate: number): ApplicationDto {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withDescription(description: string): ApplicationDto {
        this['description'] = description;
        return this;
    }
    public withInstanceUrn(instanceUrn: string): ApplicationDto {
        this['instance_urn'] = instanceUrn;
        return this;
    }
    public set instanceUrn(instanceUrn: string  | undefined) {
        this['instance_urn'] = instanceUrn;
    }
    public get instanceUrn(): string | undefined {
        return this['instance_urn'];
    }
    public withName(name: string): ApplicationDto {
        this['name'] = name;
        return this;
    }
    public withPortalOptions(portalOptions: PortalOptionsDto): ApplicationDto {
        this['portal_options'] = portalOptions;
        return this;
    }
    public set portalOptions(portalOptions: PortalOptionsDto  | undefined) {
        this['portal_options'] = portalOptions;
    }
    public get portalOptions(): PortalOptionsDto | undefined {
        return this['portal_options'];
    }
    public withStatus(status: ApplicationDtoStatusEnum | string): ApplicationDto {
        this['status'] = status;
        return this;
    }
    public withApplicationAccount(applicationAccount: string): ApplicationDto {
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
export enum ApplicationDtoStatusEnum {
    DISABLED = 'DISABLED',
    ENABLED = 'ENABLED'
}
