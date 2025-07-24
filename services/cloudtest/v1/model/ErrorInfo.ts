

export class ErrorInfo {
    private 'error_content'?: string;
    private 'error_index'?: string;
    private 'error_point'?: string;
    private 'high_light'?: boolean;
    public constructor() { 
    }
    public withErrorContent(errorContent: string): ErrorInfo {
        this['error_content'] = errorContent;
        return this;
    }
    public set errorContent(errorContent: string  | undefined) {
        this['error_content'] = errorContent;
    }
    public get errorContent(): string | undefined {
        return this['error_content'];
    }
    public withErrorIndex(errorIndex: string): ErrorInfo {
        this['error_index'] = errorIndex;
        return this;
    }
    public set errorIndex(errorIndex: string  | undefined) {
        this['error_index'] = errorIndex;
    }
    public get errorIndex(): string | undefined {
        return this['error_index'];
    }
    public withErrorPoint(errorPoint: string): ErrorInfo {
        this['error_point'] = errorPoint;
        return this;
    }
    public set errorPoint(errorPoint: string  | undefined) {
        this['error_point'] = errorPoint;
    }
    public get errorPoint(): string | undefined {
        return this['error_point'];
    }
    public withHighLight(highLight: boolean): ErrorInfo {
        this['high_light'] = highLight;
        return this;
    }
    public set highLight(highLight: boolean  | undefined) {
        this['high_light'] = highLight;
    }
    public get highLight(): boolean | undefined {
        return this['high_light'];
    }
}