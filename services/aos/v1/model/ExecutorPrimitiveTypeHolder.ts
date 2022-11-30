

export class ExecutorPrimitiveTypeHolder {
    public executor?: string;
    public constructor() { 
    }
    public withExecutor(executor: string): ExecutorPrimitiveTypeHolder {
        this['executor'] = executor;
        return this;
    }
}