

export class PublicationResponseBase {
    public id?: string;
    public lastUpdatedBy?: string;
    public createTime?: number;
    public updateTime?: number;
    public publishName?: string;
    public publishScope?: string;
    public startTime?: number;
    public endTime?: number;
    public publishStatus?: PublicationResponseBasePublishStatusEnum | string;
    public constructor() { 
    }
    public withId(id: string): PublicationResponseBase {
        this['id'] = id;
        return this;
    }
    public withLastUpdatedBy(lastUpdatedBy: string): PublicationResponseBase {
        this['lastUpdatedBy'] = lastUpdatedBy;
        return this;
    }
    public withCreateTime(createTime: number): PublicationResponseBase {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: number): PublicationResponseBase {
        this['updateTime'] = updateTime;
        return this;
    }
    public withPublishName(publishName: string): PublicationResponseBase {
        this['publishName'] = publishName;
        return this;
    }
    public withPublishScope(publishScope: string): PublicationResponseBase {
        this['publishScope'] = publishScope;
        return this;
    }
    public withStartTime(startTime: number): PublicationResponseBase {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): PublicationResponseBase {
        this['endTime'] = endTime;
        return this;
    }
    public withPublishStatus(publishStatus: PublicationResponseBasePublishStatusEnum | string): PublicationResponseBase {
        this['publishStatus'] = publishStatus;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicationResponseBasePublishStatusEnum {
    NOT_ONLINE = 'NOT_ONLINE',
    PUBLISHING = 'PUBLISHING',
    ALREADY_OFFLINE = 'ALREADY_OFFLINE'
}
