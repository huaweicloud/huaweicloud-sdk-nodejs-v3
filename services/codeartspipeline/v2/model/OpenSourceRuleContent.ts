import { LicenseProperty } from './LicenseProperty';
import { SecurityProperty } from './SecurityProperty';
import { VersionSetProperty } from './VersionSetProperty';


export class OpenSourceRuleContent {
    private 'version_set'?: VersionSetProperty;
    public security?: SecurityProperty;
    public license?: LicenseProperty;
    public constructor() { 
    }
    public withVersionSet(versionSet: VersionSetProperty): OpenSourceRuleContent {
        this['version_set'] = versionSet;
        return this;
    }
    public set versionSet(versionSet: VersionSetProperty  | undefined) {
        this['version_set'] = versionSet;
    }
    public get versionSet(): VersionSetProperty | undefined {
        return this['version_set'];
    }
    public withSecurity(security: SecurityProperty): OpenSourceRuleContent {
        this['security'] = security;
        return this;
    }
    public withLicense(license: LicenseProperty): OpenSourceRuleContent {
        this['license'] = license;
        return this;
    }
}