

export class ShowLatestUpgradableReleaseRequest {
    private 'sub_product_name'?: string;
    private 'os_type'?: ShowLatestUpgradableReleaseRequestOsTypeEnum | string;
    public arch?: ShowLatestUpgradableReleaseRequestArchEnum | string;
    public constructor(subProductName?: string, osType?: string) { 
        this['sub_product_name'] = subProductName;
        this['os_type'] = osType;
    }
    public withSubProductName(subProductName: string): ShowLatestUpgradableReleaseRequest {
        this['sub_product_name'] = subProductName;
        return this;
    }
    public set subProductName(subProductName: string  | undefined) {
        this['sub_product_name'] = subProductName;
    }
    public get subProductName(): string | undefined {
        return this['sub_product_name'];
    }
    public withOsType(osType: ShowLatestUpgradableReleaseRequestOsTypeEnum | string): ShowLatestUpgradableReleaseRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: ShowLatestUpgradableReleaseRequestOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): ShowLatestUpgradableReleaseRequestOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withArch(arch: ShowLatestUpgradableReleaseRequestArchEnum | string): ShowLatestUpgradableReleaseRequest {
        this['arch'] = arch;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLatestUpgradableReleaseRequestOsTypeEnum {
    WINDOWS = 'windows',
    DEBIAN = 'debian',
    DARWIN = 'darwin'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowLatestUpgradableReleaseRequestArchEnum {
    X86_64 = 'X86-64',
    ARM64 = 'Arm64',
    UNIVERSAL = 'Universal'
}
