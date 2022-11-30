import { CreateRedirectPoolsConfig } from './CreateRedirectPoolsConfig';
import { FixtedResponseConfig } from './FixtedResponseConfig';
import { RedirectUrlConfig } from './RedirectUrlConfig';
import { RuleRef } from './RuleRef';


export class L7Policy {
    public action: string;
    private 'admin_state_up': boolean | undefined;
    public description: string;
    public id: string;
    private 'listener_id': string | undefined;
    public name: string;
    public position: number;
    public priority?: number;
    private 'project_id': string | undefined;
    private 'provisioning_status': string | undefined;
    private 'redirect_pool_id': string | undefined;
    private 'redirect_pools_config': Array<CreateRedirectPoolsConfig> | undefined;
    private 'redirect_listener_id': string | undefined;
    private 'redirect_url': string | undefined;
    public rules: Array<RuleRef>;
    private 'redirect_url_config': RedirectUrlConfig | undefined;
    private 'fixed_response_config': FixtedResponseConfig | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor(action?: any, adminStateUp?: any, description?: any, id?: any, listenerId?: any, name?: any, position?: any, projectId?: any, provisioningStatus?: any, redirectPoolId?: any, redirectPoolsConfig?: any, redirectListenerId?: any, redirectUrl?: any, rules?: any, redirectUrlConfig?: any, fixedResponseConfig?: any) { 
        this['action'] = action;
        this['admin_state_up'] = adminStateUp;
        this['description'] = description;
        this['id'] = id;
        this['listener_id'] = listenerId;
        this['name'] = name;
        this['position'] = position;
        this['project_id'] = projectId;
        this['provisioning_status'] = provisioningStatus;
        this['redirect_pool_id'] = redirectPoolId;
        this['redirect_pools_config'] = redirectPoolsConfig;
        this['redirect_listener_id'] = redirectListenerId;
        this['redirect_url'] = redirectUrl;
        this['rules'] = rules;
        this['redirect_url_config'] = redirectUrlConfig;
        this['fixed_response_config'] = fixedResponseConfig;
    }
    public withAction(action: string): L7Policy {
        this['action'] = action;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): L7Policy {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDescription(description: string): L7Policy {
        this['description'] = description;
        return this;
    }
    public withId(id: string): L7Policy {
        this['id'] = id;
        return this;
    }
    public withListenerId(listenerId: string): L7Policy {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withName(name: string): L7Policy {
        this['name'] = name;
        return this;
    }
    public withPosition(position: number): L7Policy {
        this['position'] = position;
        return this;
    }
    public withPriority(priority: number): L7Policy {
        this['priority'] = priority;
        return this;
    }
    public withProjectId(projectId: string): L7Policy {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProvisioningStatus(provisioningStatus: string): L7Policy {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withRedirectPoolId(redirectPoolId: string): L7Policy {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId() {
        return this['redirect_pool_id'];
    }
    public withRedirectPoolsConfig(redirectPoolsConfig: Array<CreateRedirectPoolsConfig>): L7Policy {
        this['redirect_pools_config'] = redirectPoolsConfig;
        return this;
    }
    public set redirectPoolsConfig(redirectPoolsConfig: Array<CreateRedirectPoolsConfig> | undefined) {
        this['redirect_pools_config'] = redirectPoolsConfig;
    }
    public get redirectPoolsConfig() {
        return this['redirect_pools_config'];
    }
    public withRedirectListenerId(redirectListenerId: string): L7Policy {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId() {
        return this['redirect_listener_id'];
    }
    public withRedirectUrl(redirectUrl: string): L7Policy {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl() {
        return this['redirect_url'];
    }
    public withRules(rules: Array<RuleRef>): L7Policy {
        this['rules'] = rules;
        return this;
    }
    public withRedirectUrlConfig(redirectUrlConfig: RedirectUrlConfig): L7Policy {
        this['redirect_url_config'] = redirectUrlConfig;
        return this;
    }
    public set redirectUrlConfig(redirectUrlConfig: RedirectUrlConfig | undefined) {
        this['redirect_url_config'] = redirectUrlConfig;
    }
    public get redirectUrlConfig() {
        return this['redirect_url_config'];
    }
    public withFixedResponseConfig(fixedResponseConfig: FixtedResponseConfig): L7Policy {
        this['fixed_response_config'] = fixedResponseConfig;
        return this;
    }
    public set fixedResponseConfig(fixedResponseConfig: FixtedResponseConfig | undefined) {
        this['fixed_response_config'] = fixedResponseConfig;
    }
    public get fixedResponseConfig() {
        return this['fixed_response_config'];
    }
    public withCreatedAt(createdAt: string): L7Policy {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): L7Policy {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}