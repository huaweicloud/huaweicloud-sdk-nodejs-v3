

export class ManagedOperation {
    private 'enable_parallel_operation'?: boolean;
    public constructor() { 
    }
    public withEnableParallelOperation(enableParallelOperation: boolean): ManagedOperation {
        this['enable_parallel_operation'] = enableParallelOperation;
        return this;
    }
    public set enableParallelOperation(enableParallelOperation: boolean  | undefined) {
        this['enable_parallel_operation'] = enableParallelOperation;
    }
    public get enableParallelOperation(): boolean | undefined {
        return this['enable_parallel_operation'];
    }
}