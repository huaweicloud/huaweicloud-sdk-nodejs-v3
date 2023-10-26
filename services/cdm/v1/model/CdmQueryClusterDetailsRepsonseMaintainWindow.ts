

export class CdmQueryClusterDetailsRepsonseMaintainWindow {
    public day?: string;
    public startTime?: string;
    public endTime?: string;
    public constructor() { 
    }
    public withDay(day: string): CdmQueryClusterDetailsRepsonseMaintainWindow {
        this['day'] = day;
        return this;
    }
    public withStartTime(startTime: string): CdmQueryClusterDetailsRepsonseMaintainWindow {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): CdmQueryClusterDetailsRepsonseMaintainWindow {
        this['endTime'] = endTime;
        return this;
    }
}