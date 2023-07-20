

export class ListTrackersRequest {
    private 'tracker_name'?: string;
    private 'tracker_type'?: ListTrackersRequestTrackerTypeEnum | string;
    public constructor() { 
    }
    public withTrackerName(trackerName: string): ListTrackersRequest {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withTrackerType(trackerType: ListTrackersRequestTrackerTypeEnum | string): ListTrackersRequest {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: ListTrackersRequestTrackerTypeEnum | string  | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType(): ListTrackersRequestTrackerTypeEnum | string | undefined {
        return this['tracker_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTrackersRequestTrackerTypeEnum {
    SYSTEM = 'system',
    DATA = 'data'
}
