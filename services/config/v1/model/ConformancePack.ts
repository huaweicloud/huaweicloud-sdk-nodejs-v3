import { VarsStructure } from './VarsStructure';


export class ConformancePack {
    public id?: string;
    public name?: string;
    private 'stack_id'?: string;
    private 'stack_name'?: string;
    private 'deployment_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public status?: ConformancePackStatusEnum | string;
    private 'error_message'?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    private 'created_by'?: string;
    public constructor() { 
    }
    public withId(id: string): ConformancePack {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConformancePack {
        this['name'] = name;
        return this;
    }
    public withStackId(stackId: string): ConformancePack {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withStackName(stackName: string): ConformancePack {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withDeploymentId(deploymentId: string): ConformancePack {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withCreatedAt(createdAt: string): ConformancePack {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ConformancePack {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStatus(status: ConformancePackStatusEnum | string): ConformancePack {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): ConformancePack {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): ConformancePack {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
    public withCreatedBy(createdBy: string): ConformancePack {
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
export enum ConformancePackStatusEnum {
    CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL',
    CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS',
    DELETE_FAILED = 'DELETE_FAILED',
    ROLLBACK_SUCCESSFUL = 'ROLLBACK_SUCCESSFUL',
    ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED'
}
