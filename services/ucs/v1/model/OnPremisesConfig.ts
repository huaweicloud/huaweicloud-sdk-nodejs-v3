import { OnPremisesVersionInfo } from './OnPremisesVersionInfo';


export class OnPremisesConfig {
    public versionsInfo?: Array<OnPremisesVersionInfo>;
    public constructor() { 
    }
    public withVersionsInfo(versionsInfo: Array<OnPremisesVersionInfo>): OnPremisesConfig {
        this['versionsInfo'] = versionsInfo;
        return this;
    }
}