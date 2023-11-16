
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePolicyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'package_id'?: string;
    public description?: string;
    private 'clean_threshold'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreatePolicyResponse {
        this['name'] = name;
        return this;
    }
    public withPackageId(packageId: string): CreatePolicyResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withDescription(description: string): CreatePolicyResponse {
        this['description'] = description;
        return this;
    }
    public withCleanThreshold(cleanThreshold: number): CreatePolicyResponse {
        this['clean_threshold'] = cleanThreshold;
        return this;
    }
    public set cleanThreshold(cleanThreshold: number  | undefined) {
        this['clean_threshold'] = cleanThreshold;
    }
    public get cleanThreshold(): number | undefined {
        return this['clean_threshold'];
    }
}