import { LVMConfig } from './LVMConfig';
import { RuntimeConfig } from './RuntimeConfig';


export class VirtualSpace {
    public name: string;
    public size: string;
    public lvmConfig?: LVMConfig;
    public runtimeConfig?: RuntimeConfig;
    public constructor(name?: any, size?: any) { 
        this['name'] = name;
        this['size'] = size;
    }
    public withName(name: string): VirtualSpace {
        this['name'] = name;
        return this;
    }
    public withSize(size: string): VirtualSpace {
        this['size'] = size;
        return this;
    }
    public withLvmConfig(lvmConfig: LVMConfig): VirtualSpace {
        this['lvmConfig'] = lvmConfig;
        return this;
    }
    public withRuntimeConfig(runtimeConfig: RuntimeConfig): VirtualSpace {
        this['runtimeConfig'] = runtimeConfig;
        return this;
    }
}