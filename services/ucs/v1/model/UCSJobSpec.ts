import { UCSTask } from './UCSTask';


export class UCSJobSpec {
    public taskList?: Array<UCSTask>;
    public domainID?: string;
    public operation?: string;
    public waitTimeOut?: number;
    public type?: string;
    public relatedObjects?: { [key: string]: string; };
    public extendParam?: { [key: string]: object; };
    public constructor() { 
    }
    public withTaskList(taskList: Array<UCSTask>): UCSJobSpec {
        this['taskList'] = taskList;
        return this;
    }
    public withDomainID(domainID: string): UCSJobSpec {
        this['domainID'] = domainID;
        return this;
    }
    public withOperation(operation: string): UCSJobSpec {
        this['operation'] = operation;
        return this;
    }
    public withWaitTimeOut(waitTimeOut: number): UCSJobSpec {
        this['waitTimeOut'] = waitTimeOut;
        return this;
    }
    public withType(type: string): UCSJobSpec {
        this['type'] = type;
        return this;
    }
    public withRelatedObjects(relatedObjects: { [key: string]: string; }): UCSJobSpec {
        this['relatedObjects'] = relatedObjects;
        return this;
    }
    public withExtendParam(extendParam: { [key: string]: object; }): UCSJobSpec {
        this['extendParam'] = extendParam;
        return this;
    }
}