

export class PrivilegedProcessResponseInfo {
    private 'process_file_path'?: string;
    public constructor() { 
    }
    public withProcessFilePath(processFilePath: string): PrivilegedProcessResponseInfo {
        this['process_file_path'] = processFilePath;
        return this;
    }
    public set processFilePath(processFilePath: string  | undefined) {
        this['process_file_path'] = processFilePath;
    }
    public get processFilePath(): string | undefined {
        return this['process_file_path'];
    }
}