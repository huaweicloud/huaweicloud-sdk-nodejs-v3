import { AvailableZone } from './AvailableZone';


export class Flavor {
    public id?: string;
    private 'spec_code'?: string;
    public vcpus?: string;
    public ram?: string;
    private 'az_infos'?: Array<AvailableZone>;
    public constructor(id?: string, specCode?: string, vcpus?: string, ram?: string, azInfos?: Array<AvailableZone>) { 
        this['id'] = id;
        this['spec_code'] = specCode;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['az_infos'] = azInfos;
    }
    public withId(id: string): Flavor {
        this['id'] = id;
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
    public withVcpus(vcpus: string): Flavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): Flavor {
        this['ram'] = ram;
        return this;
    }
    public withAzInfos(azInfos: Array<AvailableZone>): Flavor {
        this['az_infos'] = azInfos;
        return this;
    }
    public set azInfos(azInfos: Array<AvailableZone>  | undefined) {
        this['az_infos'] = azInfos;
    }
    public get azInfos(): Array<AvailableZone> | undefined {
        return this['az_infos'];
    }
}