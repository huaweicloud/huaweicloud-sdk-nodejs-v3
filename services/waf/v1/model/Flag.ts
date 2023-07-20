

export class Flag {
    private 'pci_3ds'?: FlagPci3dsEnum | string;
    private 'pci_dss'?: FlagPciDssEnum | string;
    public cname?: FlagCnameEnum | string;
    private 'is_dual_az'?: FlagIsDualAzEnum | string;
    public ipv6?: FlagIpv6Enum | string;
    public constructor() { 
    }
    public withPci3ds(pci3ds: FlagPci3dsEnum | string): Flag {
        this['pci_3ds'] = pci3ds;
        return this;
    }
    public set pci3ds(pci3ds: FlagPci3dsEnum | string  | undefined) {
        this['pci_3ds'] = pci3ds;
    }
    public get pci3ds(): FlagPci3dsEnum | string | undefined {
        return this['pci_3ds'];
    }
    public withPciDss(pciDss: FlagPciDssEnum | string): Flag {
        this['pci_dss'] = pciDss;
        return this;
    }
    public set pciDss(pciDss: FlagPciDssEnum | string  | undefined) {
        this['pci_dss'] = pciDss;
    }
    public get pciDss(): FlagPciDssEnum | string | undefined {
        return this['pci_dss'];
    }
    public withCname(cname: FlagCnameEnum | string): Flag {
        this['cname'] = cname;
        return this;
    }
    public withIsDualAz(isDualAz: FlagIsDualAzEnum | string): Flag {
        this['is_dual_az'] = isDualAz;
        return this;
    }
    public set isDualAz(isDualAz: FlagIsDualAzEnum | string  | undefined) {
        this['is_dual_az'] = isDualAz;
    }
    public get isDualAz(): FlagIsDualAzEnum | string | undefined {
        return this['is_dual_az'];
    }
    public withIpv6(ipv6: FlagIpv6Enum | string): Flag {
        this['ipv6'] = ipv6;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlagPci3dsEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum FlagPciDssEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum FlagCnameEnum {
    OLD = 'old',
    NEW = 'new'
}
/**
    * @export
    * @enum {string}
    */
export enum FlagIsDualAzEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum FlagIpv6Enum {
    TRUE = 'true',
    FALSE = 'false'
}
