import { CreateFixtedResponseConfig } from './CreateFixtedResponseConfig';
import { CreateL7PolicyRuleOption } from './CreateL7PolicyRuleOption';
import { CreateRedirectPoolsConfig } from './CreateRedirectPoolsConfig';
import { CreateRedirectUrlConfig } from './CreateRedirectUrlConfig';


export class CreateL7PolicyOption {
    public action: string;
    private 'admin_state_up'?: boolean | undefined;
    public description?: string;
    private 'listener_id': string | undefined;
    public name?: string;
    public position?: number;
    public priority?: number;
    private 'project_id'?: string | undefined;
    private 'redirect_listener_id'?: string | undefined;
    private 'redirect_pool_id'?: string | undefined;
    private 'redirect_pools_config'?: Array<CreateRedirectPoolsConfig> | undefined;
    private 'redirect_url'?: string | undefined;
    private 'redirect_url_config'?: CreateRedirectUrlConfig | undefined;
    private 'fixed_response_config'?: CreateFixtedResponseConfig | undefined;
    public rules?: Array<CreateL7PolicyRuleOption>;
    public constructor(action?: any, listenerId?: any) { 
        this['action'] = action;
        this['listener_id'] = listenerId;
    }
    public withAction(action: string): CreateL7PolicyOption {
        this['action'] = action;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateL7PolicyOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDescription(description: string): CreateL7PolicyOption {
        this['description'] = description;
        return this;
    }
    public withListenerId(listenerId: string): CreateL7PolicyOption {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withName(name: string): CreateL7PolicyOption {
        this['name'] = name;
        return this;
    }
    public withPosition(position: number): CreateL7PolicyOption {
        this['position'] = position;
        return this;
    }
    public withPriority(priority: number): CreateL7PolicyOption {
        this['priority'] = priority;
        return this;
    }
    public withProjectId(projectId: string): CreateL7PolicyOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withRedirectListenerId(redirectListenerId: string): CreateL7PolicyOption {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId() {
        return this['redirect_listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): CreateL7PolicyOption {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId() {
        return this['redirect_pool_id'];
    }
    public withRedirectPoolsConfig(redirectPoolsConfig: Array<CreateRedirectPoolsConfig>): CreateL7PolicyOption {
        this['redirect_pools_config'] = redirectPoolsConfig;
        return this;
    }
    public set redirectPoolsConfig(redirectPoolsConfig: Array<CreateRedirectPoolsConfig> | undefined) {
        this['redirect_pools_config'] = redirectPoolsConfig;
    }
    public get redirectPoolsConfig() {
        return this['redirect_pools_config'];
    }
    public withRedirectUrl(redirectUrl: string): CreateL7PolicyOption {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl() {
        return this['redirect_url'];
    }
    public withRedirectUrlConfig(redirectUrlConfig: CreateRedirectUrlConfig): CreateL7PolicyOption {
        this['redirect_url_config'] = redirectUrlConfig;
        return this;
    }
    public set redirectUrlConfig(redirectUrlConfig: CreateRedirectUrlConfig | undefined) {
        this['redirect_url_config'] = redirectUrlConfig;
    }
    public get redirectUrlConfig() {
        return this['redirect_url_config'];
    }
    public withFixedResponseConfig(fixedResponseConfig: CreateFixtedResponseConfig): CreateL7PolicyOption {
        this['fixed_response_config'] = fixedResponseConfig;
        return this;
    }
    public set fixedResponseConfig(fixedResponseConfig: CreateFixtedResponseConfig | undefined) {
        this['fixed_response_config'] = fixedResponseConfig;
    }
    public get fixedResponseConfig() {
        return this['fixed_response_config'];
    }
    public withRules(rules: Array<CreateL7PolicyRuleOption>): CreateL7PolicyOption {
        this['rules'] = rules;
        return this;
    }
}