import { FunctionRef } from './FunctionRef';


export class Action {
    private 'function_ref'?: FunctionRef | undefined;
    public constructor() { 
    }
    public withFunctionRef(functionRef: FunctionRef): Action {
        this['function_ref'] = functionRef;
        return this;
    }
    public set functionRef(functionRef: FunctionRef | undefined) {
        this['function_ref'] = functionRef;
    }
    public get functionRef() {
        return this['function_ref'];
    }
}