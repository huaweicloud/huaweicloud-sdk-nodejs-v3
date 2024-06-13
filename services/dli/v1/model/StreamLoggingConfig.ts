import { StreamClassLoggerLevel } from './StreamClassLoggerLevel';


export class StreamLoggingConfig {
    private 'log_enabled'?: boolean;
    private 'obs_bucket'?: string;
    private 'root_logger_level'?: string;
    private 'loggers_level_of_class'?: Array<StreamClassLoggerLevel>;
    public constructor() { 
    }
    public withLogEnabled(logEnabled: boolean): StreamLoggingConfig {
        this['log_enabled'] = logEnabled;
        return this;
    }
    public set logEnabled(logEnabled: boolean  | undefined) {
        this['log_enabled'] = logEnabled;
    }
    public get logEnabled(): boolean | undefined {
        return this['log_enabled'];
    }
    public withObsBucket(obsBucket: string): StreamLoggingConfig {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withRootLoggerLevel(rootLoggerLevel: string): StreamLoggingConfig {
        this['root_logger_level'] = rootLoggerLevel;
        return this;
    }
    public set rootLoggerLevel(rootLoggerLevel: string  | undefined) {
        this['root_logger_level'] = rootLoggerLevel;
    }
    public get rootLoggerLevel(): string | undefined {
        return this['root_logger_level'];
    }
    public withLoggersLevelOfClass(loggersLevelOfClass: Array<StreamClassLoggerLevel>): StreamLoggingConfig {
        this['loggers_level_of_class'] = loggersLevelOfClass;
        return this;
    }
    public set loggersLevelOfClass(loggersLevelOfClass: Array<StreamClassLoggerLevel>  | undefined) {
        this['loggers_level_of_class'] = loggersLevelOfClass;
    }
    public get loggersLevelOfClass(): Array<StreamClassLoggerLevel> | undefined {
        return this['loggers_level_of_class'];
    }
}