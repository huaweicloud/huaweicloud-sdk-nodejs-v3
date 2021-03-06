

export class ProtectPolicyOption {
    private 'operation_protection': boolean | undefined;
    public constructor(operationProtection?: any) { 
        this['operation_protection'] = operationProtection;
    }
    public withOperationProtection(operationProtection: boolean): ProtectPolicyOption {
        this['operation_protection'] = operationProtection;
        return this;
    }
    public set operationProtection(operationProtection: boolean | undefined) {
        this['operation_protection'] = operationProtection;
    }
    public get operationProtection() {
        return this['operation_protection'];
    }
}