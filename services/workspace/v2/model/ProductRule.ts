

export class ProductRule {
    private 'identify_condition'?: string;
    public publisher?: string;
    private 'product_name'?: string;
    private 'process_name'?: string;
    private 'support_os'?: string;
    public version?: string;
    private 'product_version'?: string;
    public constructor() { 
    }
    public withIdentifyCondition(identifyCondition: string): ProductRule {
        this['identify_condition'] = identifyCondition;
        return this;
    }
    public set identifyCondition(identifyCondition: string  | undefined) {
        this['identify_condition'] = identifyCondition;
    }
    public get identifyCondition(): string | undefined {
        return this['identify_condition'];
    }
    public withPublisher(publisher: string): ProductRule {
        this['publisher'] = publisher;
        return this;
    }
    public withProductName(productName: string): ProductRule {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withProcessName(processName: string): ProductRule {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withSupportOs(supportOs: string): ProductRule {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
    public withVersion(version: string): ProductRule {
        this['version'] = version;
        return this;
    }
    public withProductVersion(productVersion: string): ProductRule {
        this['product_version'] = productVersion;
        return this;
    }
    public set productVersion(productVersion: string  | undefined) {
        this['product_version'] = productVersion;
    }
    public get productVersion(): string | undefined {
        return this['product_version'];
    }
}