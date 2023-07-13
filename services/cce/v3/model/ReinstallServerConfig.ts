import { ReinstallVolumeSpec } from './ReinstallVolumeSpec';
import { UserTag } from './UserTag';


export class ReinstallServerConfig {
    public userTags?: Array<UserTag>;
    public rootVolume?: ReinstallVolumeSpec;
    public constructor() { 
    }
    public withUserTags(userTags: Array<UserTag>): ReinstallServerConfig {
        this['userTags'] = userTags;
        return this;
    }
    public withRootVolume(rootVolume: ReinstallVolumeSpec): ReinstallServerConfig {
        this['rootVolume'] = rootVolume;
        return this;
    }
}