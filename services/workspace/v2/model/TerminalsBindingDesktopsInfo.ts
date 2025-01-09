

export class TerminalsBindingDesktopsInfo {
    public id?: string;
    public mac?: string;
    private 'desktop_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): TerminalsBindingDesktopsInfo {
        this['id'] = id;
        return this;
    }
    public withMac(mac: string): TerminalsBindingDesktopsInfo {
        this['mac'] = mac;
        return this;
    }
    public withDesktopName(desktopName: string): TerminalsBindingDesktopsInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDescription(description: string): TerminalsBindingDesktopsInfo {
        this['description'] = description;
        return this;
    }
}