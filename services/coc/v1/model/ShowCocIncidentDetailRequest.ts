

export class ShowCocIncidentDetailRequest {
    private 'incident_num'?: string;
    public constructor(incidentNum?: string) { 
        this['incident_num'] = incidentNum;
    }
    public withIncidentNum(incidentNum: string): ShowCocIncidentDetailRequest {
        this['incident_num'] = incidentNum;
        return this;
    }
    public set incidentNum(incidentNum: string  | undefined) {
        this['incident_num'] = incidentNum;
    }
    public get incidentNum(): string | undefined {
        return this['incident_num'];
    }
}