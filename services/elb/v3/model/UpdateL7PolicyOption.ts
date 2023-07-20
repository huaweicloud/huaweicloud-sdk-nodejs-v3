import { CreateRuleOption } from './CreateRuleOption';
import { UpdateFixtedResponseConfig } from './UpdateFixtedResponseConfig';
import { UpdateRedirectPoolsExtendConfig } from './UpdateRedirectPoolsExtendConfig';
import { UpdateRedirectUrlConfig } from './UpdateRedirectUrlConfig';


export class UpdateL7PolicyOption {
    private 'admin_state_up'?: boolean;
    public description?: string;
    public name?: string;
    private 'redirect_listener_id'?: string;
    private 'redirect_pool_id'?: string;
    private 'redirect_url_config'?: UpdateRedirectUrlConfig;
    private 'fixed_response_config'?: UpdateFixtedResponseConfig;
    private 'redirect_pools_extend_config'?: UpdateRedirectPoolsExtendConfig;
    public rules?: Array<CreateRuleOption>;
    public priority?: number;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateL7PolicyOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
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
    public set redirectListenerId(redirectListenerId: string  | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId(): string | undefined {
        return this['redirect_listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): UpdateL7PolicyOption {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string  | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId(): string | undefined {
        return this['redirect_pool_id'];
    }
    public withRedirectUrlConfig(redirectUrlConfig: UpdateRedirectUrlConfig): UpdateL7PolicyOption {
        this['redirect_url_config'] = redirectUrlConfig;
        return this;
    }
    public set redirectUrlConfig(redirectUrlConfig: UpdateRedirectUrlConfig  | undefined) {
        this['redirect_url_config'] = redirectUrlConfig;
    }
    public get redirectUrlConfig(): UpdateRedirectUrlConfig | undefined {
        return this['redirect_url_config'];
    }
    public withFixedResponseConfig(fixedResponseConfig: UpdateFixtedResponseConfig): UpdateL7PolicyOption {
        this['fixed_response_config'] = fixedResponseConfig;
        return this;
    }
    public set fixedResponseConfig(fixedResponseConfig: UpdateFixtedResponseConfig  | undefined) {
        this['fixed_response_config'] = fixedResponseConfig;
    }
    public get fixedResponseConfig(): UpdateFixtedResponseConfig | undefined {
        return this['fixed_response_config'];
    }
    public withRedirectPoolsExtendConfig(redirectPoolsExtendConfig: UpdateRedirectPoolsExtendConfig): UpdateL7PolicyOption {
        this['redirect_pools_extend_config'] = redirectPoolsExtendConfig;
        return this;
    }
    public set redirectPoolsExtendConfig(redirectPoolsExtendConfig: UpdateRedirectPoolsExtendConfig  | undefined) {
        this['redirect_pools_extend_config'] = redirectPoolsExtendConfig;
    }
    public get redirectPoolsExtendConfig(): UpdateRedirectPoolsExtendConfig | undefined {
        return this['redirect_pools_extend_config'];
    }
    public withRules(rules: Array<CreateRuleOption>): UpdateL7PolicyOption {
        this['rules'] = rules;
        return this;
    }
    public withPriority(priority: number): UpdateL7PolicyOption {
        this['priority'] = priority;
        return this;
    }
}