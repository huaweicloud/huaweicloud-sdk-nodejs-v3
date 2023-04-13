import { ObjectMaskingTaskInputData } from './ObjectMaskingTaskInputData';


export class ObjectMaskingTaskInput {
    public type: string;
    public data: Array<ObjectMaskingTaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): ObjectMaskingTaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<ObjectMaskingTaskInputData>): ObjectMaskingTaskInput {
        this['data'] = data;
        return this;
    }
}