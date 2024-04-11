import { ManagedOperation } from './ManagedOperation';


export class ManagedOperationTypeHolder {
    private 'managed_operation'?: ManagedOperation;
    public constructor() { 
    }
    public withManagedOperation(managedOperation: ManagedOperation): ManagedOperationTypeHolder {
        this['managed_operation'] = managedOperation;
        return this;
    }
    public set managedOperation(managedOperation: ManagedOperation  | undefined) {
        this['managed_operation'] = managedOperation;
    }
    public get managedOperation(): ManagedOperation | undefined {
        return this['managed_operation'];
    }
}