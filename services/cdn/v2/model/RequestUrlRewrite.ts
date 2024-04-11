import { UrlRewriteCondition } from './UrlRewriteCondition';


export class RequestUrlRewrite {
    public condition?: UrlRewriteCondition;
    private 'redirect_status_code'?: number;
    private 'redirect_url'?: string;
    private 'redirect_host'?: string;
    private 'execution_mode'?: string;
    public constructor(condition?: UrlRewriteCondition, redirectUrl?: string, executionMode?: string) { 
        this['condition'] = condition;
        this['redirect_url'] = redirectUrl;
        this['execution_mode'] = executionMode;
    }
    public withCondition(condition: UrlRewriteCondition): RequestUrlRewrite {
        this['condition'] = condition;
        return this;
    }
    public withRedirectStatusCode(redirectStatusCode: number): RequestUrlRewrite {
        this['redirect_status_code'] = redirectStatusCode;
        return this;
    }
    public set redirectStatusCode(redirectStatusCode: number  | undefined) {
        this['redirect_status_code'] = redirectStatusCode;
    }
    public get redirectStatusCode(): number | undefined {
        return this['redirect_status_code'];
    }
    public withRedirectUrl(redirectUrl: string): RequestUrlRewrite {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
        return this['redirect_url'];
    }
    public withRedirectHost(redirectHost: string): RequestUrlRewrite {
        this['redirect_host'] = redirectHost;
        return this;
    }
    public set redirectHost(redirectHost: string  | undefined) {
        this['redirect_host'] = redirectHost;
    }
    public get redirectHost(): string | undefined {
        return this['redirect_host'];
    }
    public withExecutionMode(executionMode: string): RequestUrlRewrite {
        this['execution_mode'] = executionMode;
        return this;
    }
    public set executionMode(executionMode: string  | undefined) {
        this['execution_mode'] = executionMode;
    }
    public get executionMode(): string | undefined {
        return this['execution_mode'];
    }
}