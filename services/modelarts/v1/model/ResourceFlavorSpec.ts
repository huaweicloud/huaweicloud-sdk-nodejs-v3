import { ResourceFlavorSpecDataVolume } from './ResourceFlavorSpecDataVolume';
import { ResourceFlavorSpecGpu } from './ResourceFlavorSpecGpu';
import { ResourceFlavorSpecNpu } from './ResourceFlavorSpecNpu';


export class ResourceFlavorSpec {
    public type?: string;
    public cpuArch?: string;
    public cpu?: string;
    public memory?: string;
    public gpu?: ResourceFlavorSpecGpu;
    public npu?: ResourceFlavorSpecNpu;
    public dataVolume?: Array<ResourceFlavorSpecDataVolume>;
    public billingModes?: Array<number>;
    public billingCode?: string;
    public jobFlavors?: Array<string>;
    public constructor() { 
    }
    public withType(type: string): ResourceFlavorSpec {
        this['type'] = type;
        return this;
    }
    public withCpuArch(cpuArch: string): ResourceFlavorSpec {
        this['cpuArch'] = cpuArch;
        return this;
    }
    public withCpu(cpu: string): ResourceFlavorSpec {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): ResourceFlavorSpec {
        this['memory'] = memory;
        return this;
    }
    public withGpu(gpu: ResourceFlavorSpecGpu): ResourceFlavorSpec {
        this['gpu'] = gpu;
        return this;
    }
    public withNpu(npu: ResourceFlavorSpecNpu): ResourceFlavorSpec {
        this['npu'] = npu;
        return this;
    }
    public withDataVolume(dataVolume: Array<ResourceFlavorSpecDataVolume>): ResourceFlavorSpec {
        this['dataVolume'] = dataVolume;
        return this;
    }
    public withBillingModes(billingModes: Array<number>): ResourceFlavorSpec {
        this['billingModes'] = billingModes;
        return this;
    }
    public withBillingCode(billingCode: string): ResourceFlavorSpec {
        this['billingCode'] = billingCode;
        return this;
    }
    public withJobFlavors(jobFlavors: Array<string>): ResourceFlavorSpec {
        this['jobFlavors'] = jobFlavors;
        return this;
    }
}