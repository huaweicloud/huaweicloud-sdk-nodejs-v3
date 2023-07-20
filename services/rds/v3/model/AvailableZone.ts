

export class AvailableZone {
    public code?: string;
    public description?: string;
    public constructor(code?: string, description?: string) { 
        this['code'] = code;
        this['description'] = description;
    }
    public withCode(code: string): AvailableZone {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): AvailableZone {
        this['description'] = description;
        return this;
    }
}