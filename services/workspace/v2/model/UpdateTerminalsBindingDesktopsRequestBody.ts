

export class UpdateTerminalsBindingDesktopsRequestBody {
    public id?: string;
    public mac?: string;
    private 'desktop_name'?: string;
    public description?: string;
    public constructor(id?: string, mac?: string, desktopName?: string) { 
        this['id'] = id;
        this['mac'] = mac;
        this['desktop_name'] = desktopName;
    }
    public withId(id: string): UpdateTerminalsBindingDesktopsRequestBody {
        this['id'] = id;
        return this;
    }
    public withMac(mac: string): UpdateTerminalsBindingDesktopsRequestBody {
        this['mac'] = mac;
        return this;
    }
    public withDesktopName(desktopName: string): UpdateTerminalsBindingDesktopsRequestBody {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDescription(description: string): UpdateTerminalsBindingDesktopsRequestBody {
        this['description'] = description;
        return this;
    }
}