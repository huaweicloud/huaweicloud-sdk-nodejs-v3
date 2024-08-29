

export class FlavorQuasar {
    public id?: string;
    public name?: string;
    public vcpus?: number;
    public ram?: number;
    public disk?: number;
    private 'root_gb'?: number;
    private 'ephemeral_gb'?: number;
    private 'extra_specs'?: { [key: string]: string; };
    public constructor() { 
    }
    public withId(id: string): FlavorQuasar {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorQuasar {
        this['name'] = name;
        return this;
    }
    public withVcpus(vcpus: number): FlavorQuasar {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): FlavorQuasar {
        this['ram'] = ram;
        return this;
    }
    public withDisk(disk: number): FlavorQuasar {
        this['disk'] = disk;
        return this;
    }
    public withRootGb(rootGb: number): FlavorQuasar {
        this['root_gb'] = rootGb;
        return this;
    }
    public set rootGb(rootGb: number  | undefined) {
        this['root_gb'] = rootGb;
    }
    public get rootGb(): number | undefined {
        return this['root_gb'];
    }
    public withEphemeralGb(ephemeralGb: number): FlavorQuasar {
        this['ephemeral_gb'] = ephemeralGb;
        return this;
    }
    public set ephemeralGb(ephemeralGb: number  | undefined) {
        this['ephemeral_gb'] = ephemeralGb;
    }
    public get ephemeralGb(): number | undefined {
        return this['ephemeral_gb'];
    }
    public withExtraSpecs(extraSpecs: { [key: string]: string; }): FlavorQuasar {
        this['extra_specs'] = extraSpecs;
        return this;
    }
    public set extraSpecs(extraSpecs: { [key: string]: string; }  | undefined) {
        this['extra_specs'] = extraSpecs;
    }
    public get extraSpecs(): { [key: string]: string; } | undefined {
        return this['extra_specs'];
    }
}