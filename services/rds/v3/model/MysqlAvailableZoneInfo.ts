

export class MysqlAvailableZoneInfo {
    public code?: string;
    public description?: string;
    public constructor() { 
    }
    public withCode(code: string): MysqlAvailableZoneInfo {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): MysqlAvailableZoneInfo {
        this['description'] = description;
        return this;
    }
}