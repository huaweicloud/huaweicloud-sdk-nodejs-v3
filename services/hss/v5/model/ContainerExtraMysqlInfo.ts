

export class ContainerExtraMysqlInfo {
    private 'custom_path'?: string;
    public constructor() { 
    }
    public withCustomPath(customPath: string): ContainerExtraMysqlInfo {
        this['custom_path'] = customPath;
        return this;
    }
    public set customPath(customPath: string  | undefined) {
        this['custom_path'] = customPath;
    }
    public get customPath(): string | undefined {
        return this['custom_path'];
    }
}