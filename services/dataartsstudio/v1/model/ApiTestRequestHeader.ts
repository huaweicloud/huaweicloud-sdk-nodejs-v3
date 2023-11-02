

export class ApiTestRequestHeader {
    public path?: string;
    private 'user_agent'?: string;
    private 'x_apig_mode'?: string;
    private 'x_app_identity'?: number;
    public constructor() { 
    }
    public withPath(path: string): ApiTestRequestHeader {
        this['path'] = path;
        return this;
    }
    public withUserAgent(userAgent: string): ApiTestRequestHeader {
        this['user_agent'] = userAgent;
        return this;
    }
    public set userAgent(userAgent: string  | undefined) {
        this['user_agent'] = userAgent;
    }
    public get userAgent(): string | undefined {
        return this['user_agent'];
    }
    public withXApigMode(xApigMode: string): ApiTestRequestHeader {
        this['x_apig_mode'] = xApigMode;
        return this;
    }
    public set xApigMode(xApigMode: string  | undefined) {
        this['x_apig_mode'] = xApigMode;
    }
    public get xApigMode(): string | undefined {
        return this['x_apig_mode'];
    }
    public withXAppIdentity(xAppIdentity: number): ApiTestRequestHeader {
        this['x_app_identity'] = xAppIdentity;
        return this;
    }
    public set xAppIdentity(xAppIdentity: number  | undefined) {
        this['x_app_identity'] = xAppIdentity;
    }
    public get xAppIdentity(): number | undefined {
        return this['x_app_identity'];
    }
}