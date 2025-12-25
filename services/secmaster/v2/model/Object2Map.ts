

export class Object2Map {
    public metric?: { [key: string]: number; };
    public category?: string;
    public constructor() { 
    }
    public withMetric(metric: { [key: string]: number; }): Object2Map {
        this['metric'] = metric;
        return this;
    }
    public withCategory(category: string): Object2Map {
        this['category'] = category;
        return this;
    }
}