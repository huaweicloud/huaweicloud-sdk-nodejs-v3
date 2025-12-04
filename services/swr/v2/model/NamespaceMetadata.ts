

export class NamespaceMetadata {
    private 'public'?: NamespaceMetadataPublicEnum | string;
    private 'auto_scan'?: NamespaceMetadataAutoScanEnum | string;
    private 'prevent_vul'?: NamespaceMetadataPreventVulEnum | string;
    public severity?: NamespaceMetadataSeverityEnum | string;
    public constructor(_public?: string) { 
        this['public'] = _public;
    }
    public withPublic(_public: NamespaceMetadataPublicEnum | string): NamespaceMetadata {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: NamespaceMetadataPublicEnum | string  | undefined) {
        this['public'] = _public;
    }
    public get _public(): NamespaceMetadataPublicEnum | string | undefined {
        return this['public'];
    }
    public withAutoScan(autoScan: NamespaceMetadataAutoScanEnum | string): NamespaceMetadata {
        this['auto_scan'] = autoScan;
        return this;
    }
    public set autoScan(autoScan: NamespaceMetadataAutoScanEnum | string  | undefined) {
        this['auto_scan'] = autoScan;
    }
    public get autoScan(): NamespaceMetadataAutoScanEnum | string | undefined {
        return this['auto_scan'];
    }
    public withPreventVul(preventVul: NamespaceMetadataPreventVulEnum | string): NamespaceMetadata {
        this['prevent_vul'] = preventVul;
        return this;
    }
    public set preventVul(preventVul: NamespaceMetadataPreventVulEnum | string  | undefined) {
        this['prevent_vul'] = preventVul;
    }
    public get preventVul(): NamespaceMetadataPreventVulEnum | string | undefined {
        return this['prevent_vul'];
    }
    public withSeverity(severity: NamespaceMetadataSeverityEnum | string): NamespaceMetadata {
        this['severity'] = severity;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NamespaceMetadataPublicEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum NamespaceMetadataAutoScanEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum NamespaceMetadataPreventVulEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum NamespaceMetadataSeverityEnum {
    NONE = 'none',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical'
}
