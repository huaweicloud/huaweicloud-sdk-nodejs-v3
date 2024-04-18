import { VarsStructure } from './VarsStructure';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConformancePackResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'stack_id'?: string;
    private 'stack_name'?: string;
    private 'deployment_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'template_key'?: string;
    private 'template_uri'?: string;
    private 'agency_name'?: string;
    public status?: UpdateConformancePackResponseStatusEnum | string;
    private 'error_message'?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    private 'created_by'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateConformancePackResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateConformancePackResponse {
        this['name'] = name;
        return this;
    }
    public withStackId(stackId: string): UpdateConformancePackResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withStackName(stackName: string): UpdateConformancePackResponse {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withDeploymentId(deploymentId: string): UpdateConformancePackResponse {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withCreatedAt(createdAt: string): UpdateConformancePackResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateConformancePackResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withTemplateKey(templateKey: string): UpdateConformancePackResponse {
        this['template_key'] = templateKey;
        return this;
    }
    public set templateKey(templateKey: string  | undefined) {
        this['template_key'] = templateKey;
    }
    public get templateKey(): string | undefined {
        return this['template_key'];
    }
    public withTemplateUri(templateUri: string): UpdateConformancePackResponse {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
    public withAgencyName(agencyName: string): UpdateConformancePackResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withStatus(status: UpdateConformancePackResponseStatusEnum | string): UpdateConformancePackResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): UpdateConformancePackResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): UpdateConformancePackResponse {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
    public withCreatedBy(createdBy: string): UpdateConformancePackResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateConformancePackResponseStatusEnum {
    CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL',
    CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS',
    DELETE_FAILED = 'DELETE_FAILED',
    ROLLBACK_SUCCESSFUL = 'ROLLBACK_SUCCESSFUL',
    ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED',
    UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL',
    UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS',
    UPDATE_FAILED = 'UPDATE_FAILED'
}
