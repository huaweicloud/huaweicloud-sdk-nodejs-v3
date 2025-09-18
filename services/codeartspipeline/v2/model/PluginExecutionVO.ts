

export class PluginExecutionVO {
    public type?: string;
    public target?: string;
    private 'file_path'?: string;
    public constructor() { 
    }
    public withType(type: string): PluginExecutionVO {
        this['type'] = type;
        return this;
    }
    public withTarget(target: string): PluginExecutionVO {
        this['target'] = target;
        return this;
    }
    public withFilePath(filePath: string): PluginExecutionVO {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}