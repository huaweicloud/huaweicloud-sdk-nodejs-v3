

export class SecurityLevelInfo {
    public name?: string;
    public level?: string;
    public constructor() { 
    }
    public withName(name: string): SecurityLevelInfo {
        this['name'] = name;
        return this;
    }
    public withLevel(level: string): SecurityLevelInfo {
        this['level'] = level;
        return this;
    }
}