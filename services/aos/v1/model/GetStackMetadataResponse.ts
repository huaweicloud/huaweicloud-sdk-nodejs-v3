import { AgenciesPrimitiveTypeHolder } from './AgenciesPrimitiveTypeHolder';
import { Agency } from './Agency';
import { EnableAutoRollbackPrimitiveTypeHolder } from './EnableAutoRollbackPrimitiveTypeHolder';
import { EnableDeletionProtectionPrimitiveTypeHolder } from './EnableDeletionProtectionPrimitiveTypeHolder';
import { StackDescriptionPrimitiveTypeHolder } from './StackDescriptionPrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './StackNamePrimitiveTypeHolder';
import { StackStatusMessagePrimitiveTypeHolder } from './StackStatusMessagePrimitiveTypeHolder';
import { StackStatusPrimitiveTypeHolder } from './StackStatusPrimitiveTypeHolder';
import { VarsBodyPrimitiveTypeHolder } from './VarsBodyPrimitiveTypeHolder';
import { VarsStructure } from './VarsStructure';
import { VarsStructurePrimitiveTypeHolder } from './VarsStructurePrimitiveTypeHolder';
import { VarsUriContentPrimitiveTypeHolder } from './VarsUriContentPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetStackMetadataResponse extends SdkResponse {
    private 'stack_id'?: string;
    private 'stack_name'?: string;
    public description?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    private 'vars_body'?: string;
    private 'enable_deletion_protection'?: boolean;
    private 'enable_auto_rollback'?: boolean;
    public status?: GetStackMetadataResponseStatusEnum | string;
    public agencies?: Array<Agency>;
    private 'status_message'?: string;
    private 'vars_uri_content'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(stackName?: string) { 
        super();
        this['stack_name'] = stackName;
    }
    public withStackId(stackId: string): GetStackMetadataResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withStackName(stackName: string): GetStackMetadataResponse {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withDescription(description: string): GetStackMetadataResponse {
        this['description'] = description;
        return this;
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): GetStackMetadataResponse {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
    public withVarsBody(varsBody: string): GetStackMetadataResponse {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string  | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody(): string | undefined {
        return this['vars_body'];
    }
    public withEnableDeletionProtection(enableDeletionProtection: boolean): GetStackMetadataResponse {
        this['enable_deletion_protection'] = enableDeletionProtection;
        return this;
    }
    public set enableDeletionProtection(enableDeletionProtection: boolean  | undefined) {
        this['enable_deletion_protection'] = enableDeletionProtection;
    }
    public get enableDeletionProtection(): boolean | undefined {
        return this['enable_deletion_protection'];
    }
    public withEnableAutoRollback(enableAutoRollback: boolean): GetStackMetadataResponse {
        this['enable_auto_rollback'] = enableAutoRollback;
        return this;
    }
    public set enableAutoRollback(enableAutoRollback: boolean  | undefined) {
        this['enable_auto_rollback'] = enableAutoRollback;
    }
    public get enableAutoRollback(): boolean | undefined {
        return this['enable_auto_rollback'];
    }
    public withStatus(status: GetStackMetadataResponseStatusEnum | string): GetStackMetadataResponse {
        this['status'] = status;
        return this;
    }
    public withAgencies(agencies: Array<Agency>): GetStackMetadataResponse {
        this['agencies'] = agencies;
        return this;
    }
    public withStatusMessage(statusMessage: string): GetStackMetadataResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withVarsUriContent(varsUriContent: string): GetStackMetadataResponse {
        this['vars_uri_content'] = varsUriContent;
        return this;
    }
    public set varsUriContent(varsUriContent: string  | undefined) {
        this['vars_uri_content'] = varsUriContent;
    }
    public get varsUriContent(): string | undefined {
        return this['vars_uri_content'];
    }
    public withCreateTime(createTime: string): GetStackMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): GetStackMetadataResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetStackMetadataResponseStatusEnum {
    CREATION_COMPLETE = 'CREATION_COMPLETE',
    DEPLOYMENT_IN_PROGRESS = 'DEPLOYMENT_IN_PROGRESS',
    DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED',
    DEPLOYMENT_COMPLETE = 'DEPLOYMENT_COMPLETE',
    ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED',
    ROLLBACK_COMPLETE = 'ROLLBACK_COMPLETE',
    DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS',
    DELETION_FAILED = 'DELETION_FAILED'
}
