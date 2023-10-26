import { ExecutionPlanDescriptionPrimitiveTypeHolder } from './ExecutionPlanDescriptionPrimitiveTypeHolder';
import { ExecutionPlanIdPrimitiveTypeHolder } from './ExecutionPlanIdPrimitiveTypeHolder';
import { ExecutionPlanNamePrimitiveTypeHolder } from './ExecutionPlanNamePrimitiveTypeHolder';
import { ExecutionPlanStatusMessagePrimitiveTypeHolder } from './ExecutionPlanStatusMessagePrimitiveTypeHolder';
import { ExecutionPlanStatusPrimitiveTypeHolder } from './ExecutionPlanStatusPrimitiveTypeHolder';
import { ExecutionPlanSummary } from './ExecutionPlanSummary';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './StackNamePrimitiveTypeHolder';
import { VarsBodyPrimitiveTypeHolder } from './VarsBodyPrimitiveTypeHolder';
import { VarsStructure } from './VarsStructure';
import { VarsStructurePrimitiveTypeHolder } from './VarsStructurePrimitiveTypeHolder';
import { VarsUriContentPrimitiveTypeHolder } from './VarsUriContentPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetExecutionPlanMetadataResponse extends SdkResponse {
    private 'stack_id'?: string;
    private 'stack_name'?: string;
    private 'execution_plan_id'?: string;
    private 'execution_plan_name'?: string;
    public description?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    private 'vars_uri_content'?: string;
    private 'vars_body'?: string;
    public status?: GetExecutionPlanMetadataResponseStatusEnum | string;
    private 'status_message'?: string;
    private 'create_time'?: string;
    private 'apply_time'?: string;
    public summary?: ExecutionPlanSummary;
    public constructor(executionPlanName?: string) { 
        super();
        this['execution_plan_name'] = executionPlanName;
    }
    public withStackId(stackId: string): GetExecutionPlanMetadataResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withStackName(stackName: string): GetExecutionPlanMetadataResponse {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withExecutionPlanId(executionPlanId: string): GetExecutionPlanMetadataResponse {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string  | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId(): string | undefined {
        return this['execution_plan_id'];
    }
    public withExecutionPlanName(executionPlanName: string): GetExecutionPlanMetadataResponse {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string  | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName(): string | undefined {
        return this['execution_plan_name'];
    }
    public withDescription(description: string): GetExecutionPlanMetadataResponse {
        this['description'] = description;
        return this;
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): GetExecutionPlanMetadataResponse {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
    public withVarsUriContent(varsUriContent: string): GetExecutionPlanMetadataResponse {
        this['vars_uri_content'] = varsUriContent;
        return this;
    }
    public set varsUriContent(varsUriContent: string  | undefined) {
        this['vars_uri_content'] = varsUriContent;
    }
    public get varsUriContent(): string | undefined {
        return this['vars_uri_content'];
    }
    public withVarsBody(varsBody: string): GetExecutionPlanMetadataResponse {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string  | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody(): string | undefined {
        return this['vars_body'];
    }
    public withStatus(status: GetExecutionPlanMetadataResponseStatusEnum | string): GetExecutionPlanMetadataResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): GetExecutionPlanMetadataResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withCreateTime(createTime: string): GetExecutionPlanMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withApplyTime(applyTime: string): GetExecutionPlanMetadataResponse {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: string  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): string | undefined {
        return this['apply_time'];
    }
    public withSummary(summary: ExecutionPlanSummary): GetExecutionPlanMetadataResponse {
        this['summary'] = summary;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetExecutionPlanMetadataResponseStatusEnum {
    CREATION_IN_PROGRESS = 'CREATION_IN_PROGRESS',
    CREATION_FAILED = 'CREATION_FAILED',
    AVAILABLE = 'AVAILABLE',
    APPLY_IN_PROGRESS = 'APPLY_IN_PROGRESS',
    APPLIED = 'APPLIED'
}
