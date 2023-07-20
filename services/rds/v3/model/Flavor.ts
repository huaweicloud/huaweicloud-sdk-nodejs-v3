

export class Flavor {
    public id?: string;
    public vcpus?: string;
    public ram?: number;
    private 'spec_code'?: string;
    private 'instance_mode'?: string;
    private 'az_status'?: { [key: string]: string; };
    private 'az_desc'?: { [key: string]: string; };
    private 'version_name'?: Array<string>;
    private 'group_type'?: string;
    public constructor(id?: string, vcpus?: string, ram?: number, specCode?: string, instanceMode?: string, azStatus?: { [key: string]: string; }, azDesc?: { [key: string]: string; }, versionName?: Array<string>, groupType?: string) { 
        this['id'] = id;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['spec_code'] = specCode;
        this['instance_mode'] = instanceMode;
        this['az_status'] = azStatus;
        this['az_desc'] = azDesc;
        this['version_name'] = versionName;
        this['group_type'] = groupType;
    }
    public withId(id: string): Flavor {
        this['id'] = id;
        return this;
    }
    public withVcpus(vcpus: string): Flavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): Flavor {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): Flavor {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withInstanceMode(instanceMode: string): Flavor {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): Flavor {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withAzDesc(azDesc: { [key: string]: string; }): Flavor {
        this['az_desc'] = azDesc;
        return this;
    }
    public set azDesc(azDesc: { [key: string]: string; }  | undefined) {
        this['az_desc'] = azDesc;
    }
    public get azDesc(): { [key: string]: string; } | undefined {
        return this['az_desc'];
    }
    public withVersionName(versionName: Array<string>): Flavor {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: Array<string>  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): Array<string> | undefined {
        return this['version_name'];
    }
    public withGroupType(groupType: string): Flavor {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
}