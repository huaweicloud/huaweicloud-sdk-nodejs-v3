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
    private 'stack_id'?: string | undefined;
    private 'stack_name': string | undefined;
    private 'execution_plan_id'?: string | undefined;
    private 'execution_plan_name': string | undefined;
    public description?: string;
    private 'vars_structure'?: Array<VarsStructure> | undefined;
    private 'vars_uri_content'?: string | undefined;
    private 'vars_body'?: string | undefined;
    public status?: GetExecutionPlanMetadataResponseStatusEnum;
    private 'status_message'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'apply_time'?: string | undefined;
    public summary?: ExecutionPlanSummary;
    public constructor(stackName?: any, executionPlanName?: any) { 
        super();
        this['stack_name'] = stackName;
        this['execution_plan_name'] = executionPlanName;
    }
    public withStackId(stackId: string): GetExecutionPlanMetadataResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withStackName(stackName: string): GetExecutionPlanMetadataResponse {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName() {
        return this['stack_name'];
    }
    public withExecutionPlanId(executionPlanId: string): GetExecutionPlanMetadataResponse {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId() {
        return this['execution_plan_id'];
    }
    public withExecutionPlanName(executionPlanName: string): GetExecutionPlanMetadataResponse {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName() {
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
    public set varsStructure(varsStructure: Array<VarsStructure> | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure() {
        return this['vars_structure'];
    }
    public withVarsUriContent(varsUriContent: string): GetExecutionPlanMetadataResponse {
        this['vars_uri_content'] = varsUriContent;
        return this;
    }
    public set varsUriContent(varsUriContent: string | undefined) {
        this['vars_uri_content'] = varsUriContent;
    }
    public get varsUriContent() {
        return this['vars_uri_content'];
    }
    public withVarsBody(varsBody: string): GetExecutionPlanMetadataResponse {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody() {
        return this['vars_body'];
    }
    public withStatus(status: GetExecutionPlanMetadataResponseStatusEnum): GetExecutionPlanMetadataResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): GetExecutionPlanMetadataResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage() {
        return this['status_message'];
    }
    public withCreateTime(createTime: string): GetExecutionPlanMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withApplyTime(applyTime: string): GetExecutionPlanMetadataResponse {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: string | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime() {
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
