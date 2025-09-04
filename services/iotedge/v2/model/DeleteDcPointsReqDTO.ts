

export class DeleteDcPointsReqDTO {
    public points?: Array<string>;
    public constructor(points?: Array<string>) { 
        this['points'] = points;
    }
    public withPoints(points: Array<string>): DeleteDcPointsReqDTO {
        this['points'] = points;
        return this;
    }
}