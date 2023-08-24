import { BackupTriggerPropertiesRequestInfo } from './BackupTriggerPropertiesRequestInfo';


export class BackupTriggerRequestInfo {
    public properties?: BackupTriggerPropertiesRequestInfo;
    public constructor(properties?: BackupTriggerPropertiesRequestInfo) { 
        this['properties'] = properties;
    }
    public withProperties(properties: BackupTriggerPropertiesRequestInfo): BackupTriggerRequestInfo {
        this['properties'] = properties;
        return this;
    }
}