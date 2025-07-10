
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmUserBundleResponse extends SdkResponse {
    public type?: number;
    public name?: string;
    public host?: object;
    private 'premium_type'?: number;
    private 'premium_name'?: string;
    private 'premium_host'?: object;
    public options?: object;
    public rule?: object;
    public upgrade?: object;
    public feature?: object;
    public constructor() { 
        super();
    }
    public withType(type: number): ConfirmUserBundleResponse {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ConfirmUserBundleResponse {
        this['name'] = name;
        return this;
    }
    public withHost(host: object): ConfirmUserBundleResponse {
        this['host'] = host;
        return this;
    }
    public withPremiumType(premiumType: number): ConfirmUserBundleResponse {
        this['premium_type'] = premiumType;
        return this;
    }
    public set premiumType(premiumType: number  | undefined) {
        this['premium_type'] = premiumType;
    }
    public get premiumType(): number | undefined {
        return this['premium_type'];
    }
    public withPremiumName(premiumName: string): ConfirmUserBundleResponse {
        this['premium_name'] = premiumName;
        return this;
    }
    public set premiumName(premiumName: string  | undefined) {
        this['premium_name'] = premiumName;
    }
    public get premiumName(): string | undefined {
        return this['premium_name'];
    }
    public withPremiumHost(premiumHost: object): ConfirmUserBundleResponse {
        this['premium_host'] = premiumHost;
        return this;
    }
    public set premiumHost(premiumHost: object  | undefined) {
        this['premium_host'] = premiumHost;
    }
    public get premiumHost(): object | undefined {
        return this['premium_host'];
    }
    public withOptions(options: object): ConfirmUserBundleResponse {
        this['options'] = options;
        return this;
    }
    public withRule(rule: object): ConfirmUserBundleResponse {
        this['rule'] = rule;
        return this;
    }
    public withUpgrade(upgrade: object): ConfirmUserBundleResponse {
        this['upgrade'] = upgrade;
        return this;
    }
    public withFeature(feature: object): ConfirmUserBundleResponse {
        this['feature'] = feature;
        return this;
    }
}