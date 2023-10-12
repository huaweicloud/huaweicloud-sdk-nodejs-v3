import { AdministrationAgencyNamePrimitiveTypeHolder } from './AdministrationAgencyNamePrimitiveTypeHolder';
import { AdministrationAgencyUrnPrimitiveTypeHolder } from './AdministrationAgencyUrnPrimitiveTypeHolder';
import { InitialStackDescriptionPrimitiveTypeHolder } from './InitialStackDescriptionPrimitiveTypeHolder';
import { ManagedAgencyNamePrimitiveTypeHolder } from './ManagedAgencyNamePrimitiveTypeHolder';
import { PermissionModelPrimitiveTypeHolder } from './PermissionModelPrimitiveTypeHolder';
import { StackSetCreateTimePrimitiveTypeHolder } from './StackSetCreateTimePrimitiveTypeHolder';
import { StackSetDescriptionPrimitiveTypeHolder } from './StackSetDescriptionPrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { StackSetNamePrimitiveTypeHolder } from './StackSetNamePrimitiveTypeHolder';
import { StackSetStatusPrimitiveTypeHolder } from './StackSetStatusPrimitiveTypeHolder';
import { StackSetUpdateTimePrimitiveTypeHolder } from './StackSetUpdateTimePrimitiveTypeHolder';
import { StackSetVarsURIContentPrimitiveTypeHolder } from './StackSetVarsURIContentPrimitiveTypeHolder';
import { VarsBodyPrimitiveTypeHolder } from './VarsBodyPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStackSetMetadataResponse extends SdkResponse {
    private 'stack_set_id'?: string;
    private 'stack_set_name'?: string;
    private 'stack_set_description'?: string;
    private 'initial_stack_description'?: string;
    private 'permission_model'?: ShowStackSetMetadataResponsePermissionModelEnum | string;
    private 'administration_agency_name'?: string;
    private 'managed_agency_name'?: string;
    public status?: ShowStackSetMetadataResponseStatusEnum | string;
    private 'vars_uri_content'?: string;
    private 'vars_body'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'administration_agency_urn'?: string;
    public constructor(stackSetName?: string) { 
        super();
        this['stack_set_name'] = stackSetName;
    }
    public withStackSetId(stackSetId: string): ShowStackSetMetadataResponse {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withStackSetName(stackSetName: string): ShowStackSetMetadataResponse {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackSetDescription(stackSetDescription: string): ShowStackSetMetadataResponse {
        this['stack_set_description'] = stackSetDescription;
        return this;
    }
    public set stackSetDescription(stackSetDescription: string  | undefined) {
        this['stack_set_description'] = stackSetDescription;
    }
    public get stackSetDescription(): string | undefined {
        return this['stack_set_description'];
    }
    public withInitialStackDescription(initialStackDescription: string): ShowStackSetMetadataResponse {
        this['initial_stack_description'] = initialStackDescription;
        return this;
    }
    public set initialStackDescription(initialStackDescription: string  | undefined) {
        this['initial_stack_description'] = initialStackDescription;
    }
    public get initialStackDescription(): string | undefined {
        return this['initial_stack_description'];
    }
    public withPermissionModel(permissionModel: ShowStackSetMetadataResponsePermissionModelEnum | string): ShowStackSetMetadataResponse {
        this['permission_model'] = permissionModel;
        return this;
    }
    public set permissionModel(permissionModel: ShowStackSetMetadataResponsePermissionModelEnum | string  | undefined) {
        this['permission_model'] = permissionModel;
    }
    public get permissionModel(): ShowStackSetMetadataResponsePermissionModelEnum | string | undefined {
        return this['permission_model'];
    }
    public withAdministrationAgencyName(administrationAgencyName: string): ShowStackSetMetadataResponse {
        this['administration_agency_name'] = administrationAgencyName;
        return this;
    }
    public set administrationAgencyName(administrationAgencyName: string  | undefined) {
        this['administration_agency_name'] = administrationAgencyName;
    }
    public get administrationAgencyName(): string | undefined {
        return this['administration_agency_name'];
    }
    public withManagedAgencyName(managedAgencyName: string): ShowStackSetMetadataResponse {
        this['managed_agency_name'] = managedAgencyName;
        return this;
    }
    public set managedAgencyName(managedAgencyName: string  | undefined) {
        this['managed_agency_name'] = managedAgencyName;
    }
    public get managedAgencyName(): string | undefined {
        return this['managed_agency_name'];
    }
    public withStatus(status: ShowStackSetMetadataResponseStatusEnum | string): ShowStackSetMetadataResponse {
        this['status'] = status;
        return this;
    }
    public withVarsUriContent(varsUriContent: string): ShowStackSetMetadataResponse {
        this['vars_uri_content'] = varsUriContent;
        return this;
    }
    public set varsUriContent(varsUriContent: string  | undefined) {
        this['vars_uri_content'] = varsUriContent;
    }
    public get varsUriContent(): string | undefined {
        return this['vars_uri_content'];
    }
    public withVarsBody(varsBody: string): ShowStackSetMetadataResponse {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string  | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody(): string | undefined {
        return this['vars_body'];
    }
    public withCreateTime(createTime: string): ShowStackSetMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowStackSetMetadataResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAdministrationAgencyUrn(administrationAgencyUrn: string): ShowStackSetMetadataResponse {
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
export enum ShowStackSetMetadataResponsePermissionModelEnum {
    SELF_MANAGED = 'SELF_MANAGED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowStackSetMetadataResponseStatusEnum {
    IDLE = 'IDLE',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    DEACTIVATED = 'DEACTIVATED'
}
