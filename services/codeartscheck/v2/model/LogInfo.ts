

export class LogInfo {
    private 'display_name'?: string;
    public log?: string;
    public level?: string;
    public analysis?: string;
    public faq?: string;
    public constructor() { 
    }
    public withDisplayName(displayName: string): LogInfo {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withLog(log: string): LogInfo {
        this['log'] = log;
        return this;
    }
    public withLevel(level: string): LogInfo {
        this['level'] = level;
        return this;
    }
    public withAnalysis(analysis: string): LogInfo {
        this['analysis'] = analysis;
        return this;
    }
    public withFaq(faq: string): LogInfo {
        this['faq'] = faq;
        return this;
    }
}