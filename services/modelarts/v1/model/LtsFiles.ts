

export class LtsFiles {
    private 'log_path'?: string;
    private 'file_pattern'?: string;
    public constructor(logPath?: string, filePattern?: string) { 
        this['log_path'] = logPath;
        this['file_pattern'] = filePattern;
    }
    public withLogPath(logPath: string): LtsFiles {
        this['log_path'] = logPath;
        return this;
    }
    public set logPath(logPath: string  | undefined) {
        this['log_path'] = logPath;
    }
    public get logPath(): string | undefined {
        return this['log_path'];
    }
    public withFilePattern(filePattern: string): LtsFiles {
        this['file_pattern'] = filePattern;
        return this;
    }
    public set filePattern(filePattern: string  | undefined) {
        this['file_pattern'] = filePattern;
    }
    public get filePattern(): string | undefined {
        return this['file_pattern'];
    }
}