

export class DeleteTrackerRequest {
    private 'tracker_name'?: string;
    private 'tracker_type'?: DeleteTrackerRequestTrackerTypeEnum | string;
    public constructor() { 
    }
    public withTrackerName(trackerName: string): DeleteTrackerRequest {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withTrackerType(trackerType: DeleteTrackerRequestTrackerTypeEnum | string): DeleteTrackerRequest {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: DeleteTrackerRequestTrackerTypeEnum | string  | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType(): DeleteTrackerRequestTrackerTypeEnum | string | undefined {
        return this['tracker_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTrackerRequestTrackerTypeEnum {
    DATA = 'data'
}
