

export class ListOperation {
    private 'service_type'?: string;
    private 'resource_type'?: string;
    private 'operation_list'?: Array<string>;
    public constructor() { 
    }
    public withServiceType(serviceType: string): ListOperation {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withResourceType(resourceType: string): ListOperation {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withOperationList(operationList: Array<string>): ListOperation {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: Array<string>  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): Array<string> | undefined {
        return this['operation_list'];
    }
}