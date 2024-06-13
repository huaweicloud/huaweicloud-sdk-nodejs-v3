

export class StreamClassLoggerLevel {
    private 'logger_name'?: string;
    private 'logger_level'?: string;
    public constructor() { 
    }
    public withLoggerName(loggerName: string): StreamClassLoggerLevel {
        this['logger_name'] = loggerName;
        return this;
    }
    public set loggerName(loggerName: string  | undefined) {
        this['logger_name'] = loggerName;
    }
    public get loggerName(): string | undefined {
        return this['logger_name'];
    }
    public withLoggerLevel(loggerLevel: string): StreamClassLoggerLevel {
        this['logger_level'] = loggerLevel;
        return this;
    }
    public set loggerLevel(loggerLevel: string  | undefined) {
        this['logger_level'] = loggerLevel;
    }
    public get loggerLevel(): string | undefined {
        return this['logger_level'];
    }
}