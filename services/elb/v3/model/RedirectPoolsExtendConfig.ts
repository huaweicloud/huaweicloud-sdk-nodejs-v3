import { RewriteUrlConfig } from './RewriteUrlConfig';


export class RedirectPoolsExtendConfig {
    private 'rewrite_url_enable'?: boolean | undefined;
    private 'rewrite_url_config'?: RewriteUrlConfig | undefined;
    public constructor() { 
    }
    public withRewriteUrlEnable(rewriteUrlEnable: boolean): RedirectPoolsExtendConfig {
        this['rewrite_url_enable'] = rewriteUrlEnable;
        return this;
    }
    public set rewriteUrlEnable(rewriteUrlEnable: boolean | undefined) {
        this['rewrite_url_enable'] = rewriteUrlEnable;
    }
    public get rewriteUrlEnable() {
        return this['rewrite_url_enable'];
    }
    public withRewriteUrlConfig(rewriteUrlConfig: RewriteUrlConfig): RedirectPoolsExtendConfig {
        this['rewrite_url_config'] = rewriteUrlConfig;
        return this;
    }
    public set rewriteUrlConfig(rewriteUrlConfig: RewriteUrlConfig | undefined) {
        this['rewrite_url_config'] = rewriteUrlConfig;
    }
    public get rewriteUrlConfig() {
        return this['rewrite_url_config'];
    }
}