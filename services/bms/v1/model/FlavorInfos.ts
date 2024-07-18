import { ASICAcceleratorInfo } from './ASICAcceleratorInfo';
import { GpuInfo } from './GpuInfo';


export class FlavorInfos {
    public id?: string;
    public name?: string;
    public disk?: string;
    public vcpus?: string;
    public ram?: string;
    public gpus?: Array<GpuInfo>;
    private 'asic_accelerators'?: Array<ASICAcceleratorInfo>;
    public constructor() { 
    }
    public withId(id: string): FlavorInfos {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorInfos {
        this['name'] = name;
        return this;
    }
    public withDisk(disk: string): FlavorInfos {
        this['disk'] = disk;
        return this;
    }
    public withVcpus(vcpus: string): FlavorInfos {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): FlavorInfos {
        this['ram'] = ram;
        return this;
    }
    public withGpus(gpus: Array<GpuInfo>): FlavorInfos {
        this['gpus'] = gpus;
        return this;
    }
    public withAsicAccelerators(asicAccelerators: Array<ASICAcceleratorInfo>): FlavorInfos {
        this['asic_accelerators'] = asicAccelerators;
        return this;
    }
    public set asicAccelerators(asicAccelerators: Array<ASICAcceleratorInfo>  | undefined) {
        this['asic_accelerators'] = asicAccelerators;
    }
    public get asicAccelerators(): Array<ASICAcceleratorInfo> | undefined {
        return this['asic_accelerators'];
    }
}