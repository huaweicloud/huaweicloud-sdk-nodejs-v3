import { CreateFixtedResponseConfig } from './CreateFixtedResponseConfig';
import { CreateL7PolicyRuleOption } from './CreateL7PolicyRuleOption';
import { CreateRedirectPoolsExtendConfig } from './CreateRedirectPoolsExtendConfig';
import { CreateRedirectUrlConfig } from './CreateRedirectUrlConfig';


export class CreateL7PolicyOption {
    public action?: string;
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'listener_id'?: string;
    public name?: string;
    public position?: number;
    public priority?: number;
    private 'project_id'?: string;
    private 'redirect_listener_id'?: string;
    private 'redirect_pool_id'?: string;
    private 'redirect_url'?: string;
    private 'redirect_url_config'?: CreateRedirectUrlConfig;
    private 'fixed_response_config'?: CreateFixtedResponseConfig;
    private 'redirect_pools_extend_config'?: CreateRedirectPoolsExtendConfig;
    public rules?: Array<CreateL7PolicyRuleOption>;
    public constructor(action?: string, listenerId?: string) { 
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
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
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
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
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
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRedirectListenerId(redirectListenerId: string): CreateL7PolicyOption {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string  | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId(): string | undefined {
        return this['redirect_listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): CreateL7PolicyOption {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string  | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId(): string | undefined {
        return this['redirect_pool_id'];
    }
    public withRedirectUrl(redirectUrl: string): CreateL7PolicyOption {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
        return this['redirect_url'];
    }
    public withRedirectUrlConfig(redirectUrlConfig: CreateRedirectUrlConfig): CreateL7PolicyOption {
        this['redirect_url_config'] = redirectUrlConfig;
        return this;
    }
    public set redirectUrlConfig(redirectUrlConfig: CreateRedirectUrlConfig  | undefined) {
        this['redirect_url_config'] = redirectUrlConfig;
    }
    public get redirectUrlConfig(): CreateRedirectUrlConfig | undefined {
        return this['redirect_url_config'];
    }
    public withFixedResponseConfig(fixedResponseConfig: CreateFixtedResponseConfig): CreateL7PolicyOption {
        this['fixed_response_config'] = fixedResponseConfig;
        return this;
    }
    public set fixedResponseConfig(fixedResponseConfig: CreateFixtedResponseConfig  | undefined) {
        this['fixed_response_config'] = fixedResponseConfig;
    }
    public get fixedResponseConfig(): CreateFixtedResponseConfig | undefined {
        return this['fixed_response_config'];
    }
    public withRedirectPoolsExtendConfig(redirectPoolsExtendConfig: CreateRedirectPoolsExtendConfig): CreateL7PolicyOption {
        this['redirect_pools_extend_config'] = redirectPoolsExtendConfig;
        return this;
    }
    public set redirectPoolsExtendConfig(redirectPoolsExtendConfig: CreateRedirectPoolsExtendConfig  | undefined) {
        this['redirect_pools_extend_config'] = redirectPoolsExtendConfig;
    }
    public get redirectPoolsExtendConfig(): CreateRedirectPoolsExtendConfig | undefined {
        return this['redirect_pools_extend_config'];
    }
    public withRules(rules: Array<CreateL7PolicyRuleOption>): CreateL7PolicyOption {
        this['rules'] = rules;
        return this;
    }
}