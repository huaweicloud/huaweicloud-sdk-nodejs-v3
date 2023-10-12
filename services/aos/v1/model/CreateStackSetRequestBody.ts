import { AdministrationAgencyNamePrimitiveTypeHolder } from './AdministrationAgencyNamePrimitiveTypeHolder';
import { AdministrationAgencyUrnPrimitiveTypeHolder } from './AdministrationAgencyUrnPrimitiveTypeHolder';
import { InitialStackDescriptionPrimitiveTypeHolder } from './InitialStackDescriptionPrimitiveTypeHolder';
import { ManagedAgencyNamePrimitiveTypeHolder } from './ManagedAgencyNamePrimitiveTypeHolder';
import { PermissionModelPrimitiveTypeHolder } from './PermissionModelPrimitiveTypeHolder';
import { StackSetDescriptionPrimitiveTypeHolder } from './StackSetDescriptionPrimitiveTypeHolder';
import { StackSetNamePrimitiveTypeHolder } from './StackSetNamePrimitiveTypeHolder';
import { TemplateBodyPrimitiveTypeHolder } from './TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './TemplateURIPrimitiveTypeHolder';
import { VarsBodyPrimitiveTypeHolder } from './VarsBodyPrimitiveTypeHolder';
import { VarsURIPrimitiveTypeHolder } from './VarsURIPrimitiveTypeHolder';


export class CreateStackSetRequestBody {
    private 'stack_set_name'?: string;
    private 'stack_set_description'?: string;
    private 'permission_model'?: CreateStackSetRequestBodyPermissionModelEnum | string;
    private 'administration_agency_name'?: string;
    private 'managed_agency_name'?: string;
    private 'template_body'?: string;
    private 'template_uri'?: string;
    private 'vars_uri'?: string;
    private 'vars_body'?: string;
    private 'initial_stack_description'?: string;
    private 'administration_agency_urn'?: string;
    public constructor(stackSetName?: string) { 
        this['stack_set_name'] = stackSetName;
    }
    public withStackSetName(stackSetName: string): CreateStackSetRequestBody {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackSetDescription(stackSetDescription: string): CreateStackSetRequestBody {
        this['stack_set_description'] = stackSetDescription;
        return this;
    }
    public set stackSetDescription(stackSetDescription: string  | undefined) {
        this['stack_set_description'] = stackSetDescription;
    }
    public get stackSetDescription(): string | undefined {
        return this['stack_set_description'];
    }
    public withPermissionModel(permissionModel: CreateStackSetRequestBodyPermissionModelEnum | string): CreateStackSetRequestBody {
        this['permission_model'] = permissionModel;
        return this;
    }
    public set permissionModel(permissionModel: CreateStackSetRequestBodyPermissionModelEnum | string  | undefined) {
        this['permission_model'] = permissionModel;
    }
    public get permissionModel(): CreateStackSetRequestBodyPermissionModelEnum | string | undefined {
        return this['permission_model'];
    }
    public withAdministrationAgencyName(administrationAgencyName: string): CreateStackSetRequestBody {
        this['administration_agency_name'] = administrationAgencyName;
        return this;
    }
    public set administrationAgencyName(administrationAgencyName: string  | undefined) {
        this['administration_agency_name'] = administrationAgencyName;
    }
    public get administrationAgencyName(): string | undefined {
        return this['administration_agency_name'];
    }
    public withManagedAgencyName(managedAgencyName: string): CreateStackSetRequestBody {
        this['managed_agency_name'] = managedAgencyName;
        return this;
    }
    public set managedAgencyName(managedAgencyName: string  | undefined) {
        this['managed_agency_name'] = managedAgencyName;
    }
    public get managedAgencyName(): string | undefined {
        return this['managed_agency_name'];
    }
    public withTemplateBody(templateBody: string): CreateStackSetRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): CreateStackSetRequestBody {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
    public withVarsUri(varsUri: string): CreateStackSetRequestBody {
        this['vars_uri'] = varsUri;
        return this;
    }
    public set varsUri(varsUri: string  | undefined) {
        this['vars_uri'] = varsUri;
    }
    public get varsUri(): string | undefined {
        return this['vars_uri'];
    }
    public withVarsBody(varsBody: string): CreateStackSetRequestBody {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string  | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody(): string | undefined {
        return this['vars_body'];
    }
    public withInitialStackDescription(initialStackDescription: string): CreateStackSetRequestBody {
        this['initial_stack_description'] = initialStackDescription;
        return this;
    }
    public set initialStackDescription(initialStackDescription: string  | undefined) {
        this['initial_stack_description'] = initialStackDescription;
    }
    public get initialStackDescription(): string | undefined {
        return this['initial_stack_description'];
    }
    public withAdministrationAgencyUrn(administrationAgencyUrn: string): CreateStackSetRequestBody {
        this['administration_agency_urn'] = administrationAgencyUrn;
        return this;
    }
    public set administrationAgencyUrn(administrationAgencyUrn: string  | undefined) {
        this['administration_agency_urn'] = administrationAgencyUrn;
    }
    public get administrationAgencyUrn(): string | undefined {
        return this['administration_agency_urn'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateStackSetRequestBodyPermissionModelEnum {
    SELF_MANAGED = 'SELF_MANAGED'
}
