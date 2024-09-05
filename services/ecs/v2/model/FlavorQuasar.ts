import { ASICAcceleratorInfo } from './ASICAcceleratorInfo';
import { GpuInfo } from './GpuInfo';


export class FlavorQuasar {
    public id?: string;
    public name?: string;
    public vcpus?: number;
    public ram?: number;
    public disk?: number;
    public gpus?: Array<GpuInfo>;
    private 'asic_accelerators'?: Array<ASICAcceleratorInfo>;
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
    public withGpus(gpus: Array<GpuInfo>): FlavorQuasar {
        this['gpus'] = gpus;
        return this;
    }
    public withAsicAccelerators(asicAccelerators: Array<ASICAcceleratorInfo>): FlavorQuasar {
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