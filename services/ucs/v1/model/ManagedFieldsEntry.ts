

export class ManagedFieldsEntry {
    public manager?: string;
    public operation?: string;
    public apiVersion?: string;
    public time?: string;
    public fieldsType?: string;
    public fieldsV1?: object;
    public constructor() { 
    }
    public withManager(manager: string): ManagedFieldsEntry {
        this['manager'] = manager;
        return this;
    }
    public withOperation(operation: string): ManagedFieldsEntry {
        this['operation'] = operation;
        return this;
    }
    public withApiVersion(apiVersion: string): ManagedFieldsEntry {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withTime(time: string): ManagedFieldsEntry {
        this['time'] = time;
        return this;
    }
    public withFieldsType(fieldsType: string): ManagedFieldsEntry {
        this['fieldsType'] = fieldsType;
        return this;
    }
    public withFieldsV1(fieldsV1: object): ManagedFieldsEntry {
        this['fieldsV1'] = fieldsV1;
        return this;
    }
}