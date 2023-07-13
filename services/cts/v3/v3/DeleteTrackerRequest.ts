

export class DeleteTrackerRequest {
    private 'tracker_name'?: string | undefined;
    private 'tracker_type'?: DeleteTrackerRequestTrackerTypeEnum | undefined;
    public constructor() { 
    }
    public withTrackerName(trackerName: string): DeleteTrackerRequest {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName() {
        return this['tracker_name'];
    }
    public withTrackerType(trackerType: DeleteTrackerRequestTrackerTypeEnum): DeleteTrackerRequest {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: DeleteTrackerRequestTrackerTypeEnum | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType() {
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
