import { CreateRedirectPoolsConfig } from './CreateRedirectPoolsConfig';
import { CreateRuleOption } from './CreateRuleOption';
import { UpdateFixtedResponseConfig } from './UpdateFixtedResponseConfig';
import { UpdateRedirectUrlConfig } from './UpdateRedirectUrlConfig';


export class UpdateL7PolicyOption {
    private 'admin_state_up'?: boolean | undefined;
    public description?: string;
    public name?: string;
    private 'redirect_listener_id'?: string | undefined;
    private 'redirect_pool_id'?: string | undefined;
    private 'redirect_url_config'?: UpdateRedirectUrlConfig | undefined;
    private 'fixed_response_config'?: UpdateFixtedResponseConfig | undefined;
    public rules?: Array<CreateRuleOption>;
    public priority?: number;
    private 'redirect_pools_config'?: Array<CreateRedirectPoolsConfig> | undefined;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateL7PolicyOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDescription(description: string): UpdateL7PolicyOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateL7PolicyOption {
        this['name'] = name;
        return this;
    }
    public withRedirectListenerId(redirectListenerId: string): UpdateL7PolicyOption {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId() {
        return this['redirect_listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): UpdateL7PolicyOption {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId() {
        return this['redirect_pool_id'];
    }
    public withRedirectUrlConfig(redirectUrlConfig: UpdateRedirectUrlConfig): UpdateL7PolicyOption {
        this['redirect_url_config'] = redirectUrlConfig;
        return this;
    }
    public set redirectUrlConfig(redirectUrlConfig: UpdateRedirectUrlConfig | undefined) {
        this['redirect_url_config'] = redirectUrlConfig;
    }
    public get redirectUrlConfig() {
        return this['redirect_url_config'];
    }
    public withFixedResponseConfig(fixedResponseConfig: UpdateFixtedResponseConfig): UpdateL7PolicyOption {
        this['fixed_response_config'] = fixedResponseConfig;
        return this;
    }
    public set fixedResponseConfig(fixedResponseConfig: UpdateFixtedResponseConfig | undefined) {
        this['fixed_response_config'] = fixedResponseConfig;
    }
    public get fixedResponseConfig() {
        return this['fixed_response_config'];
    }
    public withRules(rules: Array<CreateRuleOption>): UpdateL7PolicyOption {
        this['rules'] = rules;
        return this;
    }
    public withPriority(priority: number): UpdateL7PolicyOption {
        this['priority'] = priority;
        return this;
    }
    public withRedirectPoolsConfig(redirectPoolsConfig: Array<CreateRedirectPoolsConfig>): UpdateL7PolicyOption {
        this['redirect_pools_config'] = redirectPoolsConfig;
        return this;
    }
    public set redirectPoolsConfig(redirectPoolsConfig: Array<CreateRedirectPoolsConfig> | undefined) {
        this['redirect_pools_config'] = redirectPoolsConfig;
    }
    public get redirectPoolsConfig() {
        return this['redirect_pools_config'];
    }
}