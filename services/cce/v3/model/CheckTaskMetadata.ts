

export class CheckTaskMetadata {
    public type?: CheckTaskMetadataTypeEnum | string;
    public taskID?: string;
    public addonTemplateName?: string;
    public addonInstanceName?: string;
    public addonInstanceID?: string;
    public createTimeStamp?: string;
    public expireTimeStamp?: string;
    public constructor(type?: string, taskID?: string, addonTemplateName?: string, createTimeStamp?: string) { 
        this['type'] = type;
        this['taskID'] = taskID;
        this['addonTemplateName'] = addonTemplateName;
        this['createTimeStamp'] = createTimeStamp;
    }
    public withType(type: CheckTaskMetadataTypeEnum | string): CheckTaskMetadata {
        this['type'] = type;
        return this;
    }
    public withTaskID(taskID: string): CheckTaskMetadata {
        this['taskID'] = taskID;
        return this;
    }
    public withAddonTemplateName(addonTemplateName: string): CheckTaskMetadata {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    public withAddonInstanceName(addonInstanceName: string): CheckTaskMetadata {
        this['addonInstanceName'] = addonInstanceName;
        return this;
    }
    public withAddonInstanceID(addonInstanceID: string): CheckTaskMetadata {
        this['addonInstanceID'] = addonInstanceID;
        return this;
    }
    public withCreateTimeStamp(createTimeStamp: string): CheckTaskMetadata {
        this['createTimeStamp'] = createTimeStamp;
        return this;
    }
    public withExpireTimeStamp(expireTimeStamp: string): CheckTaskMetadata {
        this['expireTimeStamp'] = expireTimeStamp;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckTaskMetadataTypeEnum {
    ADDONSTATIC = 'addonStatic',
    ADDONUPGRADE = 'addonUpgrade'
}
