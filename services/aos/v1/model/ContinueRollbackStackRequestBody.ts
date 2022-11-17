import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';


export class ContinueRollbackStackRequestBody {
    private 'stack_id'?: string | undefined;
    public constructor() { 
    }
    public withStackId(stackId: string): ContinueRollbackStackRequestBody {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
}