import { Login } from './Login';
import { NodeLifecycleConfig } from './NodeLifecycleConfig';
import { VolumeConfig } from './VolumeConfig';


export class UpgradeNodePoolSpecNodeTemplate {
    public lifeCycle?: NodeLifecycleConfig;
    public login?: Login;
    public volumeConfig?: VolumeConfig;
    public constructor(lifeCycle?: NodeLifecycleConfig, login?: Login) { 
        this['lifeCycle'] = lifeCycle;
        this['login'] = login;
    }
    public withLifeCycle(lifeCycle: NodeLifecycleConfig): UpgradeNodePoolSpecNodeTemplate {
        this['lifeCycle'] = lifeCycle;
        return this;
    }
    public withLogin(login: Login): UpgradeNodePoolSpecNodeTemplate {
        this['login'] = login;
        return this;
    }
    public withVolumeConfig(volumeConfig: VolumeConfig): UpgradeNodePoolSpecNodeTemplate {
        this['volumeConfig'] = volumeConfig;
        return this;
    }
}