import { FunctionRef } from './FunctionRef';


export class Action {
    private 'function_ref'?: FunctionRef;
    public constructor() { 
    }
    public withFunctionRef(functionRef: FunctionRef): Action {
        this['function_ref'] = functionRef;
        return this;
    }
    public set functionRef(functionRef: FunctionRef  | undefined) {
        this['function_ref'] = functionRef;
    }
    public get functionRef(): FunctionRef | undefined {
        return this['function_ref'];
    }
}