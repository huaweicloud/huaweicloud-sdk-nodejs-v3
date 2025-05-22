

export class ListSpecIssueStayTimesResponseBodyData {
    public id?: string;
    private 'stay_time'?: number;
    public constructor() { 
    }
    public withId(id: string): ListSpecIssueStayTimesResponseBodyData {
        this['id'] = id;
        return this;
    }
    public withStayTime(stayTime: number): ListSpecIssueStayTimesResponseBodyData {
        this['stay_time'] = stayTime;
        return this;
    }
    public set stayTime(stayTime: number  | undefined) {
        this['stay_time'] = stayTime;
    }
    public get stayTime(): number | undefined {
        return this['stay_time'];
    }
}