

export class ListOrganizationPoliciesRequest {
    private 'operation_type'?: string;
    public constructor(operationType?: string) { 
        this['operation_type'] = operationType;
    }
    public withOperationType(operationType: string): ListOrganizationPoliciesRequest {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
}