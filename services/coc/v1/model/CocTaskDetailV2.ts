import { CocTaskOperationDetailV2 } from './CocTaskOperationDetailV2';


export class CocTaskDetailV2 {
    public type?: string;
    public key?: string;
    public name?: string;
    public state?: string;
    public operations?: Array<CocTaskOperationDetailV2>;
    public constructor() { 
    }
    public withType(type: string): CocTaskDetailV2 {
        this['type'] = type;
        return this;
    }
    public withKey(key: string): CocTaskDetailV2 {
        this['key'] = key;
        return this;
    }
    public withName(name: string): CocTaskDetailV2 {
        this['name'] = name;
        return this;
    }
    public withState(state: string): CocTaskDetailV2 {
        this['state'] = state;
        return this;
    }
    public withOperations(operations: Array<CocTaskOperationDetailV2>): CocTaskDetailV2 {
        this['operations'] = operations;
        return this;
    }
}