import { SupportVersion } from './SupportVersion';


export class AddonVersion {
    public id?: string;
    public version?: string;
    public input?: { [key: string]: object; };
    public stable?: boolean;
    public translate?: { [key: string]: object; };
    public supportVersions?: Array<SupportVersion>;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withId(id: string): AddonVersion {
        this['id'] = id;
        return this;
    }
    public withVersion(version: string): AddonVersion {
        this['version'] = version;
        return this;
    }
    public withInput(input: { [key: string]: object; }): AddonVersion {
        this['input'] = input;
        return this;
    }
    public withStable(stable: boolean): AddonVersion {
        this['stable'] = stable;
        return this;
    }
    public withTranslate(translate: { [key: string]: object; }): AddonVersion {
        this['translate'] = translate;
        return this;
    }
    public withSupportVersions(supportVersions: Array<SupportVersion>): AddonVersion {
        this['supportVersions'] = supportVersions;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): AddonVersion {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): AddonVersion {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}