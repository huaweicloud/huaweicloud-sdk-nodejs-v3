import { CreateInsertHeadersConfig } from './CreateInsertHeadersConfig';
import { CreateRemoveHeadersConfig } from './CreateRemoveHeadersConfig';
import { CreateRewriteUrlConfig } from './CreateRewriteUrlConfig';
import { CreateTrafficLimitConfig } from './CreateTrafficLimitConfig';


export class CreateRedirectPoolsExtendConfig {
    private 'rewrite_url_enable'?: boolean;
    private 'rewrite_url_config'?: CreateRewriteUrlConfig;
    private 'insert_headers_config'?: CreateInsertHeadersConfig;
    private 'remove_headers_config'?: CreateRemoveHeadersConfig;
    private 'traffic_limit_config'?: CreateTrafficLimitConfig;
    public constructor() { 
    }
    public withRewriteUrlEnable(rewriteUrlEnable: boolean): CreateRedirectPoolsExtendConfig {
        this['rewrite_url_enable'] = rewriteUrlEnable;
        return this;
    }
    public set rewriteUrlEnable(rewriteUrlEnable: boolean  | undefined) {
        this['rewrite_url_enable'] = rewriteUrlEnable;
    }
    public get rewriteUrlEnable(): boolean | undefined {
        return this['rewrite_url_enable'];
    }
    public withRewriteUrlConfig(rewriteUrlConfig: CreateRewriteUrlConfig): CreateRedirectPoolsExtendConfig {
        this['rewrite_url_config'] = rewriteUrlConfig;
        return this;
    }
    public set rewriteUrlConfig(rewriteUrlConfig: CreateRewriteUrlConfig  | undefined) {
        this['rewrite_url_config'] = rewriteUrlConfig;
    }
    public get rewriteUrlConfig(): CreateRewriteUrlConfig | undefined {
        return this['rewrite_url_config'];
    }
    public withInsertHeadersConfig(insertHeadersConfig: CreateInsertHeadersConfig): CreateRedirectPoolsExtendConfig {
        this['insert_headers_config'] = insertHeadersConfig;
        return this;
    }
    public set insertHeadersConfig(insertHeadersConfig: CreateInsertHeadersConfig  | undefined) {
        this['insert_headers_config'] = insertHeadersConfig;
    }
    public get insertHeadersConfig(): CreateInsertHeadersConfig | undefined {
        return this['insert_headers_config'];
    }
    public withRemoveHeadersConfig(removeHeadersConfig: CreateRemoveHeadersConfig): CreateRedirectPoolsExtendConfig {
        this['remove_headers_config'] = removeHeadersConfig;
        return this;
    }
    public set removeHeadersConfig(removeHeadersConfig: CreateRemoveHeadersConfig  | undefined) {
        this['remove_headers_config'] = removeHeadersConfig;
    }
    public get removeHeadersConfig(): CreateRemoveHeadersConfig | undefined {
        return this['remove_headers_config'];
    }
    public withTrafficLimitConfig(trafficLimitConfig: CreateTrafficLimitConfig): CreateRedirectPoolsExtendConfig {
        this['traffic_limit_config'] = trafficLimitConfig;
        return this;
    }
    public set trafficLimitConfig(trafficLimitConfig: CreateTrafficLimitConfig  | undefined) {
        this['traffic_limit_config'] = trafficLimitConfig;
    }
    public get trafficLimitConfig(): CreateTrafficLimitConfig | undefined {
        return this['traffic_limit_config'];
    }
}