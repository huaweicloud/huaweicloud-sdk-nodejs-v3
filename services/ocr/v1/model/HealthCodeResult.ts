

export class HealthCodeResult {
    public name: string;
    public time: string;
    public color: string;
    public confidence: object;
    public constructor(name?: any, time?: any, color?: any, confidence?: any) { 
        this['name'] = name;
        this['time'] = time;
        this['color'] = color;
        this['confidence'] = confidence;
    }
    public withName(name: string): HealthCodeResult {
        this['name'] = name;
        return this;
    }
    public withTime(time: string): HealthCodeResult {
        this['time'] = time;
        return this;
    }
    public withColor(color: string): HealthCodeResult {
        this['color'] = color;
        return this;
    }
    public withConfidence(confidence: object): HealthCodeResult {
        this['confidence'] = confidence;
        return this;
    }
}