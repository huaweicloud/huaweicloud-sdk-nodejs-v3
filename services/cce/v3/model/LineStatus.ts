import { Point } from './Point';


export class LineStatus {
    public startPoint?: Point;
    public endPoint?: Point;
    public critical?: string;
    public constructor() { 
    }
    public withStartPoint(startPoint: Point): LineStatus {
        this['startPoint'] = startPoint;
        return this;
    }
    public withEndPoint(endPoint: Point): LineStatus {
        this['endPoint'] = endPoint;
        return this;
    }
    public withCritical(critical: string): LineStatus {
        this['critical'] = critical;
        return this;
    }
}