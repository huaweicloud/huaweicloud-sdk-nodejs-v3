import { ASICAcceleratorInfo } from './ASICAcceleratorInfo';
import { GpuInfo } from './GpuInfo';


export class FlavorDetailInfos {
    public id?: string;
    public name?: string;
    public disk?: number;
    public vcpus?: number;
    public ram?: number;
    public gpus?: Array<GpuInfo>;
    private 'asic_accelerators'?: Array<ASICAcceleratorInfo>;
    public constructor() { 
    }
    public withId(id: string): FlavorDetailInfos {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorDetailInfos {
        this['name'] = name;
        return this;
    }
    public withDisk(disk: number): FlavorDetailInfos {
        this['disk'] = disk;
        return this;
    }
    public withVcpus(vcpus: number): FlavorDetailInfos {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): FlavorDetailInfos {
        this['ram'] = ram;
        return this;
    }
    public withGpus(gpus: Array<GpuInfo>): FlavorDetailInfos {
        this['gpus'] = gpus;
        return this;
    }
    public withAsicAccelerators(asicAccelerators: Array<ASICAcceleratorInfo>): FlavorDetailInfos {
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