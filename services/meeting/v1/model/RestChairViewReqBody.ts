

export class RestChairViewReqBody {
    public viewType?: number;
    public participantID?: string;
    public switchTime?: number;
    public status?: number;
    public constructor(viewType?: number) { 
        this['viewType'] = viewType;
    }
    public withViewType(viewType: number): RestChairViewReqBody {
        this['viewType'] = viewType;
        return this;
    }
    public withParticipantID(participantID: string): RestChairViewReqBody {
        this['participantID'] = participantID;
        return this;
    }
    public withSwitchTime(switchTime: number): RestChairViewReqBody {
        this['switchTime'] = switchTime;
        return this;
    }
    public withStatus(status: number): RestChairViewReqBody {
        this['status'] = status;
        return this;
    }
}