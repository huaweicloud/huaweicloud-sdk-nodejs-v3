import { Statement } from './Statement';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDevicePolicyResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public statement?: Array<Statement>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): CreateDevicePolicyResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withPolicyId(policyId: string): CreateDevicePolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): CreateDevicePolicyResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withStatement(statement: Array<Statement>): CreateDevicePolicyResponse {
        this['statement'] = statement;
        return this;
    }
    public withCreateTime(createTime: string): CreateDevicePolicyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateDevicePolicyResponse {
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