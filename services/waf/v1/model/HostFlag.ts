

export class HostFlag {
    private 'pci_3ds'?: HostFlagPci3dsEnum | string;
    private 'pci_dss'?: HostFlagPciDssEnum | string;
    public constructor() { 
    }
    public withPci3ds(pci3ds: HostFlagPci3dsEnum | string): HostFlag {
        this['pci_3ds'] = pci3ds;
        return this;
    }
    public set pci3ds(pci3ds: HostFlagPci3dsEnum | string  | undefined) {
        this['pci_3ds'] = pci3ds;
    }
    public get pci3ds(): HostFlagPci3dsEnum | string | undefined {
        return this['pci_3ds'];
    }
    public withPciDss(pciDss: HostFlagPciDssEnum | string): HostFlag {
        this['pci_dss'] = pciDss;
        return this;
    }
    public set pciDss(pciDss: HostFlagPciDssEnum | string  | undefined) {
        this['pci_dss'] = pciDss;
    }
    public get pciDss(): HostFlagPciDssEnum | string | undefined {
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
