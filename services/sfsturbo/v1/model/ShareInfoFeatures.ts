import { ShareInfoFeature } from './ShareInfoFeature';


export class ShareInfoFeatures {
    public backup?: ShareInfoFeature;
    public constructor() { 
    }
    public withBackup(backup: ShareInfoFeature): ShareInfoFeatures {
        this['backup'] = backup;
        return this;
    }
}