

export class ListScheduledEventsRequest {
    public workspaceId?: string;
    public state?: Array<ListScheduledEventsRequestStateEnum> | Array<string>;
    public type?: Array<string>;
    public id?: string;
    public nodeName?: string;
    public poolName?: string;
    public publishStartTime?: string;
    public publishEndTime?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ListScheduledEventsRequest {
        this['workspaceId'] = workspaceId;
        return this;
    }
    public withState(state: Array<ListScheduledEventsRequestStateEnum> | Array<string>): ListScheduledEventsRequest {
        this['state'] = state;
        return this;
    }
    public withType(type: Array<string>): ListScheduledEventsRequest {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ListScheduledEventsRequest {
        this['id'] = id;
        return this;
    }
    public withNodeName(nodeName: string): ListScheduledEventsRequest {
        this['nodeName'] = nodeName;
        return this;
    }
    public withPoolName(poolName: string): ListScheduledEventsRequest {
        this['poolName'] = poolName;
        return this;
    }
    public withPublishStartTime(publishStartTime: string): ListScheduledEventsRequest {
        this['publishStartTime'] = publishStartTime;
        return this;
    }
    public withPublishEndTime(publishEndTime: string): ListScheduledEventsRequest {
        this['publishEndTime'] = publishEndTime;
        return this;
    }
    public withOffset(offset: number): ListScheduledEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduledEventsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScheduledEventsRequestStateEnum {
    INQUIRING = 'inquiring',
    SCHEDULED = 'scheduled',
    EXECUTING = 'executing',
    COMPLETED = 'completed',
    FAILED = 'failed',
    CANCELED = 'canceled'
}
