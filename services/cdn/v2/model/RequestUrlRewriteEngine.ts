

export class RequestUrlRewriteEngine {
    private 'rewrite_type'?: string;
    private 'source_url'?: string;
    private 'redirect_status_code'?: number;
    private 'redirect_url'?: string;
    private 'redirect_host'?: string;
    private 'execution_mode'?: string;
    private 'inherit_param'?: string;
    public constructor(redirectUrl?: string, executionMode?: string) { 
        this['redirect_url'] = redirectUrl;
        this['execution_mode'] = executionMode;
    }
    public withRewriteType(rewriteType: string): RequestUrlRewriteEngine {
        this['rewrite_type'] = rewriteType;
        return this;
    }
    public set rewriteType(rewriteType: string  | undefined) {
        this['rewrite_type'] = rewriteType;
    }
    public get rewriteType(): string | undefined {
        return this['rewrite_type'];
    }
    public withSourceUrl(sourceUrl: string): RequestUrlRewriteEngine {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withRedirectStatusCode(redirectStatusCode: number): RequestUrlRewriteEngine {
        this['redirect_status_code'] = redirectStatusCode;
        return this;
    }
    public set redirectStatusCode(redirectStatusCode: number  | undefined) {
        this['redirect_status_code'] = redirectStatusCode;
    }
    public get redirectStatusCode(): number | undefined {
        return this['redirect_status_code'];
    }
    public withRedirectUrl(redirectUrl: string): RequestUrlRewriteEngine {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
        return this['redirect_url'];
    }
    public withRedirectHost(redirectHost: string): RequestUrlRewriteEngine {
        this['redirect_host'] = redirectHost;
        return this;
    }
    public set redirectHost(redirectHost: string  | undefined) {
        this['redirect_host'] = redirectHost;
    }
    public get redirectHost(): string | undefined {
        return this['redirect_host'];
    }
    public withExecutionMode(executionMode: string): RequestUrlRewriteEngine {
        this['execution_mode'] = executionMode;
        return this;
    }
    public set executionMode(executionMode: string  | undefined) {
        this['execution_mode'] = executionMode;
    }
    public get executionMode(): string | undefined {
        return this['execution_mode'];
    }
    public withInheritParam(inheritParam: string): RequestUrlRewriteEngine {
        this['inherit_param'] = inheritParam;
        return this;
    }
    public set inheritParam(inheritParam: string  | undefined) {
        this['inherit_param'] = inheritParam;
    }
    public get inheritParam(): string | undefined {
        return this['inherit_param'];
    }
}