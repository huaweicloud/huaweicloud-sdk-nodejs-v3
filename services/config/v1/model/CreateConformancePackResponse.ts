import { VarsStructure } from './VarsStructure';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConformancePackResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'stack_id'?: string;
    private 'stack_name'?: string;
    private 'deployment_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public status?: CreateConformancePackResponseStatusEnum | string;
    private 'error_message'?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateConformancePackResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateConformancePackResponse {
        this['name'] = name;
        return this;
    }
    public withStackId(stackId: string): CreateConformancePackResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withStackName(stackName: string): CreateConformancePackResponse {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withDeploymentId(deploymentId: string): CreateConformancePackResponse {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withCreatedAt(createdAt: string): CreateConformancePackResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateConformancePackResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStatus(status: CreateConformancePackResponseStatusEnum | string): CreateConformancePackResponse {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): CreateConformancePackResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): CreateConformancePackResponse {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConformancePackResponseStatusEnum {
    CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL',
    CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS',
    DELETE_FAILED = 'DELETE_FAILED',
    ROLLBACK_SUCCESSFUL = 'ROLLBACK_SUCCESSFUL',
    ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED'
}
