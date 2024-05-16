

export class HtapFlavorInfoFlavors {
    public type?: string;
    public vcpus?: string;
    public ram?: string;
    public id?: string;
    private 'spec_code'?: string;
    private 'version_name'?: string;
    private 'instance_mode'?: string;
    private 'az_status'?: { [key: string]: string; };
    public constructor() { 
    }
    public withType(type: string): HtapFlavorInfoFlavors {
        this['type'] = type;
        return this;
    }
    public withVcpus(vcpus: string): HtapFlavorInfoFlavors {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): HtapFlavorInfoFlavors {
        this['ram'] = ram;
        return this;
    }
    public withId(id: string): HtapFlavorInfoFlavors {
        this['id'] = id;
        return this;
    }
    public withSpecCode(specCode: string): HtapFlavorInfoFlavors {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withVersionName(versionName: string): HtapFlavorInfoFlavors {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withInstanceMode(instanceMode: string): HtapFlavorInfoFlavors {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): HtapFlavorInfoFlavors {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
}