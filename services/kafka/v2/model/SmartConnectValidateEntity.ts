import { SmartConnectTaskRespSourceConfig } from './SmartConnectTaskRespSourceConfig';


export class SmartConnectValidateEntity {
    public task?: SmartConnectTaskRespSourceConfig;
    public type?: string;
    public constructor() { 
    }
    public withTask(task: SmartConnectTaskRespSourceConfig): SmartConnectValidateEntity {
        this['task'] = task;
        return this;
    }
    public withType(type: string): SmartConnectValidateEntity {
        this['type'] = type;
        return this;
    }
}