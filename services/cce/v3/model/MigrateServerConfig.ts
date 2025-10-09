import { MigrateVolumeSpec } from './MigrateVolumeSpec';


export class MigrateServerConfig {
    public rootVolume?: MigrateVolumeSpec;
    public constructor() { 
    }
    public withRootVolume(rootVolume: MigrateVolumeSpec): MigrateServerConfig {
        this['rootVolume'] = rootVolume;
        return this;
    }
}