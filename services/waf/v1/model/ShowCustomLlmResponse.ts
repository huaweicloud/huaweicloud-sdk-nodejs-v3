import { ReferencedPolicy } from './ReferencedPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCustomLlmResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'model_name'?: string;
    public protocol?: string;
    public url?: string;
    private 'referenced_policies'?: Array<ReferencedPolicy>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowCustomLlmResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowCustomLlmResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowCustomLlmResponse {
        this['description'] = description;
        return this;
    }
    public withModelName(modelName: string): ShowCustomLlmResponse {
        this['model_name'] = modelName;
        return this;
    }
    public set modelName(modelName: string  | undefined) {
        this['model_name'] = modelName;
    }
    public get modelName(): string | undefined {
        return this['model_name'];
    }
    public withProtocol(protocol: string): ShowCustomLlmResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withUrl(url: string): ShowCustomLlmResponse {
        this['url'] = url;
        return this;
    }
    public withReferencedPolicies(referencedPolicies: Array<ReferencedPolicy>): ShowCustomLlmResponse {
        this['referenced_policies'] = referencedPolicies;
        return this;
    }
    public set referencedPolicies(referencedPolicies: Array<ReferencedPolicy>  | undefined) {
        this['referenced_policies'] = referencedPolicies;
    }
    public get referencedPolicies(): Array<ReferencedPolicy> | undefined {
        return this['referenced_policies'];
    }
    public withCreateTime(createTime: number): ShowCustomLlmResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowCustomLlmResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}