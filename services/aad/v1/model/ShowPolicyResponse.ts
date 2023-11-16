import { PopPolicy } from './PopPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyResponse extends SdkResponse {
    public id?: string;
    private 'package_id'?: string;
    public name?: string;
    private 'clean_threshold'?: number;
    private 'pop_policy'?: PopPolicy;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withPackageId(packageId: string): ShowPolicyResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withName(name: string): ShowPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withCleanThreshold(cleanThreshold: number): ShowPolicyResponse {
        this['clean_threshold'] = cleanThreshold;
        return this;
    }
    public set cleanThreshold(cleanThreshold: number  | undefined) {
        this['clean_threshold'] = cleanThreshold;
    }
    public get cleanThreshold(): number | undefined {
        return this['clean_threshold'];
    }
    public withPopPolicy(popPolicy: PopPolicy): ShowPolicyResponse {
        this['pop_policy'] = popPolicy;
        return this;
    }
    public set popPolicy(popPolicy: PopPolicy  | undefined) {
        this['pop_policy'] = popPolicy;
    }
    public get popPolicy(): PopPolicy | undefined {
        return this['pop_policy'];
    }
}