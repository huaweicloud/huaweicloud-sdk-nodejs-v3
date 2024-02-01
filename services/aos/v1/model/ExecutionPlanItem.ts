import { ExecutionPlanDiffAttribute } from './ExecutionPlanDiffAttribute';
import { IndexPrimitiveTypeHolder } from './IndexPrimitiveTypeHolder';
import { ResourceNamePrimitiveTypeHolder } from './ResourceNamePrimitiveTypeHolder';
import { ResourceTypePrimitiveTypeHolder } from './ResourceTypePrimitiveTypeHolder';


export class ExecutionPlanItem {
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    public index?: string;
    public action?: ExecutionPlanItemActionEnum | string;
    private 'action_reason'?: string;
    private 'provider_name'?: string;
    public mode?: ExecutionPlanItemModeEnum | string;
    public drifted?: boolean;
    public imported?: boolean;
    private 'resource_id'?: string;
    public attributes?: Array<ExecutionPlanDiffAttribute>;
    public constructor() { 
    }
    public withResourceType(resourceType: string): ExecutionPlanItem {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): ExecutionPlanItem {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withIndex(index: string): ExecutionPlanItem {
        this['index'] = index;
        return this;
    }
    public withAction(action: ExecutionPlanItemActionEnum | string): ExecutionPlanItem {
        this['action'] = action;
        return this;
    }
    public withActionReason(actionReason: string): ExecutionPlanItem {
        this['action_reason'] = actionReason;
        return this;
    }
    public set actionReason(actionReason: string  | undefined) {
        this['action_reason'] = actionReason;
    }
    public get actionReason(): string | undefined {
        return this['action_reason'];
    }
    public withProviderName(providerName: string): ExecutionPlanItem {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withMode(mode: ExecutionPlanItemModeEnum | string): ExecutionPlanItem {
        this['mode'] = mode;
        return this;
    }
    public withDrifted(drifted: boolean): ExecutionPlanItem {
        this['drifted'] = drifted;
        return this;
    }
    public withImported(imported: boolean): ExecutionPlanItem {
        this['imported'] = imported;
        return this;
    }
    public withResourceId(resourceId: string): ExecutionPlanItem {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withAttributes(attributes: Array<ExecutionPlanDiffAttribute>): ExecutionPlanItem {
        this['attributes'] = attributes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecutionPlanItemActionEnum {
    ADD = 'ADD',
    ADD_THEN_DELETE = 'ADD_THEN_DELETE',
    DELETE = 'DELETE',
    DELETE_THEN_ADD = 'DELETE_THEN_ADD',
    UPDATE = 'UPDATE',
    NO_OPERATION = 'NO_OPERATION'
}
/**
    * @export
    * @enum {string}
    */
export enum ExecutionPlanItemModeEnum {
    DATA = 'DATA',
    RESOURCE = 'RESOURCE'
}
