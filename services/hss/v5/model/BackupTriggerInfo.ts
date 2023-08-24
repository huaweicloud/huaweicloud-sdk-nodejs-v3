import { BackupTriggerPropertiesInfo } from './BackupTriggerPropertiesInfo';


export class BackupTriggerInfo {
    public id?: string;
    public name?: string;
    public type?: string;
    public properties?: BackupTriggerPropertiesInfo;
    public constructor() { 
    }
    public withId(id: string): BackupTriggerInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupTriggerInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): BackupTriggerInfo {
        this['type'] = type;
        return this;
    }
    public withProperties(properties: BackupTriggerPropertiesInfo): BackupTriggerInfo {
        this['properties'] = properties;
        return this;
    }
}