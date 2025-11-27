import { FederationVersionInfo } from './FederationVersionInfo';


export class FederationConfig {
    public versionsInfo?: Array<FederationVersionInfo>;
    public constructor() { 
    }
    public withVersionsInfo(versionsInfo: Array<FederationVersionInfo>): FederationConfig {
        this['versionsInfo'] = versionsInfo;
        return this;
    }
}