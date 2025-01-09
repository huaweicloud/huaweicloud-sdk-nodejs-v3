

export class CreateTerminalsBindingDesktopsInfo {
    public line?: number;
    public mac?: string;
    private 'desktop_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withLine(line: number): CreateTerminalsBindingDesktopsInfo {
        this['line'] = line;
        return this;
    }
    public withMac(mac: string): CreateTerminalsBindingDesktopsInfo {
        this['mac'] = mac;
        return this;
    }
    public withDesktopName(desktopName: string): CreateTerminalsBindingDesktopsInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDescription(description: string): CreateTerminalsBindingDesktopsInfo {
        this['description'] = description;
        return this;
    }
}