import { CorsConfig } from './CorsConfig';
import { InsertHeadersConfig } from './InsertHeadersConfig';
import { RemoveHeadersConfig } from './RemoveHeadersConfig';
import { RewriteUrlConfig } from './RewriteUrlConfig';
import { TrafficLimitConfig } from './TrafficLimitConfig';
import { TrafficMirrorConfig } from './TrafficMirrorConfig';


export class RedirectPoolsExtendConfig {
    private 'rewrite_url_enable'?: boolean;
    private 'rewrite_url_config'?: RewriteUrlConfig;
    private 'insert_headers_config'?: InsertHeadersConfig;
    private 'remove_headers_config'?: RemoveHeadersConfig;
    private 'traffic_limit_config'?: TrafficLimitConfig;
    private 'cors_config'?: CorsConfig;
    private 'traffic_mirror_config'?: TrafficMirrorConfig;
    public constructor() { 
    }
    public withRewriteUrlEnable(rewriteUrlEnable: boolean): RedirectPoolsExtendConfig {
        this['rewrite_url_enable'] = rewriteUrlEnable;
        return this;
    }
    public set rewriteUrlEnable(rewriteUrlEnable: boolean  | undefined) {
        this['rewrite_url_enable'] = rewriteUrlEnable;
    }
    public get rewriteUrlEnable(): boolean | undefined {
        return this['rewrite_url_enable'];
    }
    public withRewriteUrlConfig(rewriteUrlConfig: RewriteUrlConfig): RedirectPoolsExtendConfig {
        this['rewrite_url_config'] = rewriteUrlConfig;
        return this;
    }
    public set rewriteUrlConfig(rewriteUrlConfig: RewriteUrlConfig  | undefined) {
        this['rewrite_url_config'] = rewriteUrlConfig;
    }
    public get rewriteUrlConfig(): RewriteUrlConfig | undefined {
        return this['rewrite_url_config'];
    }
    public withInsertHeadersConfig(insertHeadersConfig: InsertHeadersConfig): RedirectPoolsExtendConfig {
        this['insert_headers_config'] = insertHeadersConfig;
        return this;
    }
    public set insertHeadersConfig(insertHeadersConfig: InsertHeadersConfig  | undefined) {
        this['insert_headers_config'] = insertHeadersConfig;
    }
    public get insertHeadersConfig(): InsertHeadersConfig | undefined {
        return this['insert_headers_config'];
    }
    public withRemoveHeadersConfig(removeHeadersConfig: RemoveHeadersConfig): RedirectPoolsExtendConfig {
        this['remove_headers_config'] = removeHeadersConfig;
        return this;
    }
    public set removeHeadersConfig(removeHeadersConfig: RemoveHeadersConfig  | undefined) {
        this['remove_headers_config'] = removeHeadersConfig;
    }
    public get removeHeadersConfig(): RemoveHeadersConfig | undefined {
        return this['remove_headers_config'];
    }
    public withTrafficLimitConfig(trafficLimitConfig: TrafficLimitConfig): RedirectPoolsExtendConfig {
        this['traffic_limit_config'] = trafficLimitConfig;
        return this;
    }
    public set trafficLimitConfig(trafficLimitConfig: TrafficLimitConfig  | undefined) {
        this['traffic_limit_config'] = trafficLimitConfig;
    }
    public get trafficLimitConfig(): TrafficLimitConfig | undefined {
        return this['traffic_limit_config'];
    }
    public withCorsConfig(corsConfig: CorsConfig): RedirectPoolsExtendConfig {
        this['cors_config'] = corsConfig;
        return this;
    }
    public set corsConfig(corsConfig: CorsConfig  | undefined) {
        this['cors_config'] = corsConfig;
    }
    public get corsConfig(): CorsConfig | undefined {
        return this['cors_config'];
    }
    public withTrafficMirrorConfig(trafficMirrorConfig: TrafficMirrorConfig): RedirectPoolsExtendConfig {
        this['traffic_mirror_config'] = trafficMirrorConfig;
        return this;
    }
    public set trafficMirrorConfig(trafficMirrorConfig: TrafficMirrorConfig  | undefined) {
        this['traffic_mirror_config'] = trafficMirrorConfig;
    }
    public get trafficMirrorConfig(): TrafficMirrorConfig | undefined {
        return this['traffic_mirror_config'];
    }
}