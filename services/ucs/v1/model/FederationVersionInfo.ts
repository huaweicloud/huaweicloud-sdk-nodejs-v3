import { FederationVersionSpec } from './FederationVersionSpec';


export class FederationVersionInfo {
    public currentVersion?: FederationVersionSpec;
    public targetVersions?: Array<FederationVersionSpec>;
    public constructor() { 
    }
    public withCurrentVersion(currentVersion: FederationVersionSpec): FederationVersionInfo {
        this['currentVersion'] = currentVersion;
        return this;
    }
    public withTargetVersions(targetVersions: Array<FederationVersionSpec>): FederationVersionInfo {
        this['targetVersions'] = targetVersions;
        return this;
    }
}