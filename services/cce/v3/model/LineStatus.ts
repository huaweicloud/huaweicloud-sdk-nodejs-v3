import { TaskType } from './TaskType';


export class LineStatus {
    public startPoint?: TaskType;
    public endPoint?: TaskType;
    public critical?: string;
    public constructor() { 
    }
    public withStartPoint(startPoint: TaskType): LineStatus {
        this['startPoint'] = startPoint;
        return this;
    }
    public withEndPoint(endPoint: TaskType): LineStatus {
        this['endPoint'] = endPoint;
        return this;
    }
    public withCritical(critical: string): LineStatus {
        this['critical'] = critical;
        return this;
    }
}