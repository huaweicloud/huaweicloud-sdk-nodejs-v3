import { BackupTriggerPropertiesRequestInfo1 } from './BackupTriggerPropertiesRequestInfo1';


export class BackupTriggerRequestInfo1 {
    public properties?: BackupTriggerPropertiesRequestInfo1;
    public constructor() { 
    }
    public withProperties(properties: BackupTriggerPropertiesRequestInfo1): BackupTriggerRequestInfo1 {
        this['properties'] = properties;
        return this;
    }
}