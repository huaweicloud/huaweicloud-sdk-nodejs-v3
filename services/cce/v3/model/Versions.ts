import { SupportVersions } from './SupportVersions';


export class Versions {
    public creationTimestamp?: string;
    public input: object;
    public stable: boolean;
    public supportVersions: Array<SupportVersions>;
    public translate: object;
    public updateTimestamp: string;
    public version: string;
    public constructor(input?: any, stable?: any, supportVersions?: any, translate?: any, updateTimestamp?: any, version?: any) { 
        this['input'] = input;
        this['stable'] = stable;
        this['supportVersions'] = supportVersions;
        this['translate'] = translate;
        this['updateTimestamp'] = updateTimestamp;
        this['version'] = version;
    }
    public withCreationTimestamp(creationTimestamp: string): Versions {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withInput(input: object): Versions {
        this['input'] = input;
        return this;
    }
    public withStable(stable: boolean): Versions {
        this['stable'] = stable;
        return this;
    }
    public withSupportVersions(supportVersions: Array<SupportVersions>): Versions {
        this['supportVersions'] = supportVersions;
        return this;
    }
    public withTranslate(translate: object): Versions {
        this['translate'] = translate;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): Versions {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withVersion(version: string): Versions {
        this['version'] = version;
        return this;
    }
}