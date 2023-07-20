

export class MysqlFlavorsInfo {
    public vcpus?: string;
    public ram?: string;
    public type?: string;
    public id?: string;
    private 'spec_code'?: string;
    private 'version_name'?: string;
    private 'instance_mode'?: string;
    private 'az_status'?: { [key: string]: string; };
    public constructor(vcpus?: string, ram?: string, type?: string, id?: string, specCode?: string, versionName?: string, instanceMode?: string, azStatus?: { [key: string]: string; }) { 
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['type'] = type;
        this['id'] = id;
        this['spec_code'] = specCode;
        this['version_name'] = versionName;
        this['instance_mode'] = instanceMode;
        this['az_status'] = azStatus;
    }
    public withVcpus(vcpus: string): MysqlFlavorsInfo {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): MysqlFlavorsInfo {
        this['ram'] = ram;
        return this;
    }
    public withType(type: string): MysqlFlavorsInfo {
        this['type'] = type;
        return this;
    }
    public withId(id: string): MysqlFlavorsInfo {
        this['id'] = id;
        return this;
    }
    public withSpecCode(specCode: string): MysqlFlavorsInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withVersionName(versionName: string): MysqlFlavorsInfo {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withInstanceMode(instanceMode: string): MysqlFlavorsInfo {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): MysqlFlavorsInfo {
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