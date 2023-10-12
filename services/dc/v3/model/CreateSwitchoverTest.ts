

export class CreateSwitchoverTest {
    private 'resource_id'?: string;
    private 'resource_type'?: CreateSwitchoverTestResourceTypeEnum | string;
    public operation?: CreateSwitchoverTestOperationEnum | string;
    public constructor(resourceId?: string, operation?: string) { 
        this['resource_id'] = resourceId;
        this['operation'] = operation;
    }
    public withResourceId(resourceId: string): CreateSwitchoverTest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: CreateSwitchoverTestResourceTypeEnum | string): CreateSwitchoverTest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateSwitchoverTestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateSwitchoverTestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withOperation(operation: CreateSwitchoverTestOperationEnum | string): CreateSwitchoverTest {
        this['operation'] = operation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSwitchoverTestResourceTypeEnum {
    VIRTUAL_INTERFACE = 'virtual_interface'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSwitchoverTestOperationEnum {
    SHUTDOWN = 'shutdown',
    UNDO_SHUTDOWN = 'undo_shutdown'
}
