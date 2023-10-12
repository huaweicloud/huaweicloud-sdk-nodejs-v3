import { AdministrationAgencyNamePrimitiveTypeHolder } from './AdministrationAgencyNamePrimitiveTypeHolder';
import { AdministrationAgencyUrnPrimitiveTypeHolder } from './AdministrationAgencyUrnPrimitiveTypeHolder';
import { InitialStackDescriptionPrimitiveTypeHolder } from './InitialStackDescriptionPrimitiveTypeHolder';
import { ManagedAgencyNamePrimitiveTypeHolder } from './ManagedAgencyNamePrimitiveTypeHolder';
import { PermissionModelPrimitiveTypeHolder } from './PermissionModelPrimitiveTypeHolder';
import { StackSetDescriptionPrimitiveTypeHolder } from './StackSetDescriptionPrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';


export class UpdateStackSetRequestBody {
    private 'stack_set_id'?: string;
    private 'stack_set_description'?: string;
    private 'initial_stack_description'?: string;
    private 'permission_model'?: UpdateStackSetRequestBodyPermissionModelEnum | string;
    private 'administration_agency_name'?: string;
    private 'managed_agency_name'?: string;
    private 'administration_agency_urn'?: string;
    public constructor() { 
    }
    public withStackSetId(stackSetId: string): UpdateStackSetRequestBody {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withStackSetDescription(stackSetDescription: string): UpdateStackSetRequestBody {
        this['stack_set_description'] = stackSetDescription;
        return this;
    }
    public set stackSetDescription(stackSetDescription: string  | undefined) {
        this['stack_set_description'] = stackSetDescription;
    }
    public get stackSetDescription(): string | undefined {
        return this['stack_set_description'];
    }
    public withInitialStackDescription(initialStackDescription: string): UpdateStackSetRequestBody {
        this['initial_stack_description'] = initialStackDescription;
        return this;
    }
    public set initialStackDescription(initialStackDescription: string  | undefined) {
        this['initial_stack_description'] = initialStackDescription;
    }
    public get initialStackDescription(): string | undefined {
        return this['initial_stack_description'];
    }
    public withPermissionModel(permissionModel: UpdateStackSetRequestBodyPermissionModelEnum | string): UpdateStackSetRequestBody {
        this['permission_model'] = permissionModel;
        return this;
    }
    public set permissionModel(permissionModel: UpdateStackSetRequestBodyPermissionModelEnum | string  | undefined) {
        this['permission_model'] = permissionModel;
    }
    public get permissionModel(): UpdateStackSetRequestBodyPermissionModelEnum | string | undefined {
        return this['permission_model'];
    }
    public withAdministrationAgencyName(administrationAgencyName: string): UpdateStackSetRequestBody {
        this['administration_agency_name'] = administrationAgencyName;
        return this;
    }
    public set administrationAgencyName(administrationAgencyName: string  | undefined) {
        this['administration_agency_name'] = administrationAgencyName;
    }
    public get administrationAgencyName(): string | undefined {
        return this['administration_agency_name'];
    }
    public withManagedAgencyName(managedAgencyName: string): UpdateStackSetRequestBody {
        this['managed_agency_name'] = managedAgencyName;
        return this;
    }
    public set managedAgencyName(managedAgencyName: string  | undefined) {
        this['managed_agency_name'] = managedAgencyName;
    }
    public get managedAgencyName(): string | undefined {
        return this['managed_agency_name'];
    }
    public withAdministrationAgencyUrn(administrationAgencyUrn: string): UpdateStackSetRequestBody {
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
export enum UpdateStackSetRequestBodyPermissionModelEnum {
    SELF_MANAGED = 'SELF_MANAGED'
}
