import { CreateCorsConfig } from './CreateCorsConfig';
import { CreateTrafficMirrorConfig } from './CreateTrafficMirrorConfig';
import { UpdateInsertHeadersConfig } from './UpdateInsertHeadersConfig';
import { UpdateRemoveHeadersConfig } from './UpdateRemoveHeadersConfig';
import { UpdateRewriteUrlConfig } from './UpdateRewriteUrlConfig';
import { UpdateTrafficLimitConfig } from './UpdateTrafficLimitConfig';


export class UpdateRedirectPoolsExtendConfig {
    private 'rewrite_url_enable'?: boolean;
    private 'rewrite_url_config'?: UpdateRewriteUrlConfig;
    private 'insert_headers_config'?: UpdateInsertHeadersConfig;
    private 'remove_headers_config'?: UpdateRemoveHeadersConfig;
    private 'traffic_limit_config'?: UpdateTrafficLimitConfig;
    private 'cors_config'?: CreateCorsConfig;
    private 'traffic_mirror_config'?: CreateTrafficMirrorConfig;
    public constructor() { 
    }
    public withRewriteUrlEnable(rewriteUrlEnable: boolean): UpdateRedirectPoolsExtendConfig {
        this['rewrite_url_enable'] = rewriteUrlEnable;
        return this;
    }
    public set rewriteUrlEnable(rewriteUrlEnable: boolean  | undefined) {
        this['rewrite_url_enable'] = rewriteUrlEnable;
    }
    public get rewriteUrlEnable(): boolean | undefined {
        return this['rewrite_url_enable'];
    }
    public withRewriteUrlConfig(rewriteUrlConfig: UpdateRewriteUrlConfig): UpdateRedirectPoolsExtendConfig {
        this['rewrite_url_config'] = rewriteUrlConfig;
        return this;
    }
    public set rewriteUrlConfig(rewriteUrlConfig: UpdateRewriteUrlConfig  | undefined) {
        this['rewrite_url_config'] = rewriteUrlConfig;
    }
    public get rewriteUrlConfig(): UpdateRewriteUrlConfig | undefined {
        return this['rewrite_url_config'];
    }
    public withInsertHeadersConfig(insertHeadersConfig: UpdateInsertHeadersConfig): UpdateRedirectPoolsExtendConfig {
        this['insert_headers_config'] = insertHeadersConfig;
        return this;
    }
    public set insertHeadersConfig(insertHeadersConfig: UpdateInsertHeadersConfig  | undefined) {
        this['insert_headers_config'] = insertHeadersConfig;
    }
    public get insertHeadersConfig(): UpdateInsertHeadersConfig | undefined {
        return this['insert_headers_config'];
    }
    public withRemoveHeadersConfig(removeHeadersConfig: UpdateRemoveHeadersConfig): UpdateRedirectPoolsExtendConfig {
        this['remove_headers_config'] = removeHeadersConfig;
        return this;
    }
    public set removeHeadersConfig(removeHeadersConfig: UpdateRemoveHeadersConfig  | undefined) {
        this['remove_headers_config'] = removeHeadersConfig;
    }
    public get removeHeadersConfig(): UpdateRemoveHeadersConfig | undefined {
        return this['remove_headers_config'];
    }
    public withTrafficLimitConfig(trafficLimitConfig: UpdateTrafficLimitConfig): UpdateRedirectPoolsExtendConfig {
        this['traffic_limit_config'] = trafficLimitConfig;
        return this;
    }
    public set trafficLimitConfig(trafficLimitConfig: UpdateTrafficLimitConfig  | undefined) {
        this['traffic_limit_config'] = trafficLimitConfig;
    }
    public get trafficLimitConfig(): UpdateTrafficLimitConfig | undefined {
        return this['traffic_limit_config'];
    }
    public withCorsConfig(corsConfig: CreateCorsConfig): UpdateRedirectPoolsExtendConfig {
        this['cors_config'] = corsConfig;
        return this;
    }
    public set corsConfig(corsConfig: CreateCorsConfig  | undefined) {
        this['cors_config'] = corsConfig;
    }
    public get corsConfig(): CreateCorsConfig | undefined {
        return this['cors_config'];
    }
    public withTrafficMirrorConfig(trafficMirrorConfig: CreateTrafficMirrorConfig): UpdateRedirectPoolsExtendConfig {
        this['traffic_mirror_config'] = trafficMirrorConfig;
        return this;
    }
    public set trafficMirrorConfig(trafficMirrorConfig: CreateTrafficMirrorConfig  | undefined) {
        this['traffic_mirror_config'] = trafficMirrorConfig;
    }
    public get trafficMirrorConfig(): CreateTrafficMirrorConfig | undefined {
        return this['traffic_mirror_config'];
    }
}