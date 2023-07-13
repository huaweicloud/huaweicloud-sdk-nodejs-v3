

export class HostFlag {
    private 'pci_3ds'?: HostFlagPci3dsEnum | undefined;
    private 'pci_dss'?: HostFlagPciDssEnum | undefined;
    public constructor() { 
    }
    public withPci3ds(pci3ds: HostFlagPci3dsEnum): HostFlag {
        this['pci_3ds'] = pci3ds;
        return this;
    }
    public set pci3ds(pci3ds: HostFlagPci3dsEnum | undefined) {
        this['pci_3ds'] = pci3ds;
    }
    public get pci3ds() {
        return this['pci_3ds'];
    }
    public withPciDss(pciDss: HostFlagPciDssEnum): HostFlag {
        this['pci_dss'] = pciDss;
        return this;
    }
    public set pciDss(pciDss: HostFlagPciDssEnum | undefined) {
        this['pci_dss'] = pciDss;
    }
    public get pciDss() {
        return this['pci_dss'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HostFlagPci3dsEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum HostFlagPciDssEnum {
    TRUE = 'true',
    FALSE = 'false'
}
