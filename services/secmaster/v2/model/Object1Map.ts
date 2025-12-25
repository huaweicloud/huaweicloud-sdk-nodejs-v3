

export class Object1Map {
    public metric?: { [key: string]: number; };
    public category?: string;
    public constructor() { 
    }
    public withMetric(metric: { [key: string]: number; }): Object1Map {
        this['metric'] = metric;
        return this;
    }
    public withCategory(category: string): Object1Map {
        this['category'] = category;
        return this;
    }
}