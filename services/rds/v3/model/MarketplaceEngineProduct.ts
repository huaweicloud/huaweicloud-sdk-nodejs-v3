import { Agreement } from './Agreement';


export class MarketplaceEngineProduct {
    private 'engine_id'?: string;
    private 'engine_version'?: string;
    private 'spec_code'?: string;
    private 'product_id'?: string;
    private 'bp_name'?: string;
    private 'bp_domain_id'?: string;
    private 'instance_mode'?: string;
    private 'image_id'?: string;
    private 'user_license_agreement'?: string;
    public agreements?: Array<Agreement>;
    public constructor() { 
    }
    public withEngineId(engineId: string): MarketplaceEngineProduct {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withEngineVersion(engineVersion: string): MarketplaceEngineProduct {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withSpecCode(specCode: string): MarketplaceEngineProduct {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withProductId(productId: string): MarketplaceEngineProduct {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withBpName(bpName: string): MarketplaceEngineProduct {
        this['bp_name'] = bpName;
        return this;
    }
    public set bpName(bpName: string  | undefined) {
        this['bp_name'] = bpName;
    }
    public get bpName(): string | undefined {
        return this['bp_name'];
    }
    public withBpDomainId(bpDomainId: string): MarketplaceEngineProduct {
        this['bp_domain_id'] = bpDomainId;
        return this;
    }
    public set bpDomainId(bpDomainId: string  | undefined) {
        this['bp_domain_id'] = bpDomainId;
    }
    public get bpDomainId(): string | undefined {
        return this['bp_domain_id'];
    }
    public withInstanceMode(instanceMode: string): MarketplaceEngineProduct {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withImageId(imageId: string): MarketplaceEngineProduct {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withUserLicenseAgreement(userLicenseAgreement: string): MarketplaceEngineProduct {
        this['user_license_agreement'] = userLicenseAgreement;
        return this;
    }
    public set userLicenseAgreement(userLicenseAgreement: string  | undefined) {
        this['user_license_agreement'] = userLicenseAgreement;
    }
    public get userLicenseAgreement(): string | undefined {
        return this['user_license_agreement'];
    }
    public withAgreements(agreements: Array<Agreement>): MarketplaceEngineProduct {
        this['agreements'] = agreements;
        return this;
    }
}