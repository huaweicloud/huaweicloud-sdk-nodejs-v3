import { Statement } from './Statement';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDevicePolicyResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public statement?: Array<Statement>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): ShowDevicePolicyResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withPolicyId(policyId: string): ShowDevicePolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ShowDevicePolicyResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withStatement(statement: Array<Statement>): ShowDevicePolicyResponse {
        this['statement'] = statement;
        return this;
    }
    public withCreateTime(createTime: string): ShowDevicePolicyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowDevicePolicyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}