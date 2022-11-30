

export class Flag {
    private 'pci_3ds'?: FlagPci3dsEnum | undefined;
    private 'pci_dss'?: FlagPciDssEnum | undefined;
    public cname?: FlagCnameEnum;
    private 'is_dual_az'?: FlagIsDualAzEnum | undefined;
    public ipv6?: FlagIpv6Enum;
    public constructor() { 
    }
    public withPci3ds(pci3ds: FlagPci3dsEnum): Flag {
        this['pci_3ds'] = pci3ds;
        return this;
    }
    public set pci3ds(pci3ds: FlagPci3dsEnum | undefined) {
        this['pci_3ds'] = pci3ds;
    }
    public get pci3ds() {
        return this['pci_3ds'];
    }
    public withPciDss(pciDss: FlagPciDssEnum): Flag {
        this['pci_dss'] = pciDss;
        return this;
    }
    public set pciDss(pciDss: FlagPciDssEnum | undefined) {
        this['pci_dss'] = pciDss;
    }
    public get pciDss() {
        return this['pci_dss'];
    }
    public withCname(cname: FlagCnameEnum): Flag {
        this['cname'] = cname;
        return this;
    }
    public withIsDualAz(isDualAz: FlagIsDualAzEnum): Flag {
        this['is_dual_az'] = isDualAz;
        return this;
    }
    public set isDualAz(isDualAz: FlagIsDualAzEnum | undefined) {
        this['is_dual_az'] = isDualAz;
    }
    public get isDualAz() {
        return this['is_dual_az'];
    }
    public withIpv6(ipv6: FlagIpv6Enum): Flag {
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
