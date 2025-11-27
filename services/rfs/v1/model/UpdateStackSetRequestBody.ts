import { AdministrationAgencyNamePrimitiveTypeHolder } from './AdministrationAgencyNamePrimitiveTypeHolder';
import { AdministrationAgencyUrnPrimitiveTypeHolder } from './AdministrationAgencyUrnPrimitiveTypeHolder';
import { CallIdentityPrimitiveTypeHolder } from './CallIdentityPrimitiveTypeHolder';
import { InitialStackDescriptionPrimitiveTypeHolder } from './InitialStackDescriptionPrimitiveTypeHolder';
import { ManagedAgencyNamePrimitiveTypeHolder } from './ManagedAgencyNamePrimitiveTypeHolder';
import { ManagedOperation } from './ManagedOperation';
import { ManagedOperationTypeHolder } from './ManagedOperationTypeHolder';
import { StackSetDescriptionPrimitiveTypeHolder } from './StackSetDescriptionPrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';


export class UpdateStackSetRequestBody {
    private 'stack_set_id'?: string;
    private 'stack_set_description'?: string;
    private 'initial_stack_description'?: string;
    private 'administration_agency_name'?: string;
    private 'managed_agency_name'?: string;
    private 'administration_agency_urn'?: string;
    private 'managed_operation'?: ManagedOperation;
    private 'call_identity'?: UpdateStackSetRequestBodyCallIdentityEnum | string;
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
    public withManagedOperation(managedOperation: ManagedOperation): UpdateStackSetRequestBody {
        this['managed_operation'] = managedOperation;
        return this;
    }
    public set managedOperation(managedOperation: ManagedOperation  | undefined) {
        this['managed_operation'] = managedOperation;
    }
    public get managedOperation(): ManagedOperation | undefined {
        return this['managed_operation'];
    }
    public withCallIdentity(callIdentity: UpdateStackSetRequestBodyCallIdentityEnum | string): UpdateStackSetRequestBody {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: UpdateStackSetRequestBodyCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): UpdateStackSetRequestBodyCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateStackSetRequestBodyCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
