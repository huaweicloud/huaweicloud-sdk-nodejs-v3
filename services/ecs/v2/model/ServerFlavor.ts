import { ASICAcceleratorInfo } from './ASICAcceleratorInfo';
import { GpuInfo } from './GpuInfo';


export class ServerFlavor {
    public id?: string;
    public name?: string;
    public disk?: string;
    public vcpus?: string;
    public ram?: string;
    public gpus?: Array<GpuInfo>;
    private 'asic_accelerators'?: Array<ASICAcceleratorInfo>;
    public constructor(id?: string, name?: string, disk?: string, vcpus?: string, ram?: string, gpus?: Array<GpuInfo>, asicAccelerators?: Array<ASICAcceleratorInfo>) { 
        this['id'] = id;
        this['name'] = name;
        this['disk'] = disk;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['gpus'] = gpus;
        this['asic_accelerators'] = asicAccelerators;
    }
    public withId(id: string): ServerFlavor {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerFlavor {
        this['name'] = name;
        return this;
    }
    public withDisk(disk: string): ServerFlavor {
        this['disk'] = disk;
        return this;
    }
    public withVcpus(vcpus: string): ServerFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): ServerFlavor {
        this['ram'] = ram;
        return this;
    }
    public withGpus(gpus: Array<GpuInfo>): ServerFlavor {
        this['gpus'] = gpus;
        return this;
    }
    public withAsicAccelerators(asicAccelerators: Array<ASICAcceleratorInfo>): ServerFlavor {
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