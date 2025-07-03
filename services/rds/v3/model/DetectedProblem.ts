

export class DetectedProblem {
    private 'db_object'?: string;
    public level?: string;
    public description?: string;
    public constructor() { 
    }
    public withDbObject(dbObject: string): DetectedProblem {
        this['db_object'] = dbObject;
        return this;
    }
    public set dbObject(dbObject: string  | undefined) {
        this['db_object'] = dbObject;
    }
    public get dbObject(): string | undefined {
        return this['db_object'];
    }
    public withLevel(level: string): DetectedProblem {
        this['level'] = level;
        return this;
    }
    public withDescription(description: string): DetectedProblem {
        this['description'] = description;
        return this;
    }
}