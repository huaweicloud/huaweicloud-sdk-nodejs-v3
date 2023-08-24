

export class BackupTriggerPropertiesRequestInfo {
    public pattern?: Array<string>;
    public constructor(pattern?: Array<string>) { 
        this['pattern'] = pattern;
    }
    public withPattern(pattern: Array<string>): BackupTriggerPropertiesRequestInfo {
        this['pattern'] = pattern;
        return this;
    }
}