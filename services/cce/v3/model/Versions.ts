import { SupportVersions } from './SupportVersions';


export class Versions {
    public version: string;
    public input: object;
    public stable: boolean;
    public translate: object;
    public supportVersions: Array<SupportVersions>;
    public creationTimestamp?: string;
    public updateTimestamp: string;
    public constructor(version?: any, input?: any, stable?: any, translate?: any, supportVersions?: any, updateTimestamp?: any) { 
        this['version'] = version;
        this['input'] = input;
        this['stable'] = stable;
        this['translate'] = translate;
        this['supportVersions'] = supportVersions;
        this['updateTimestamp'] = updateTimestamp;
    }
    public withVersion(version: string): Versions {
        this['version'] = version;
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
    public withTranslate(translate: object): Versions {
        this['translate'] = translate;
        return this;
    }
    public withSupportVersions(supportVersions: Array<SupportVersions>): Versions {
        this['supportVersions'] = supportVersions;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): Versions {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): Versions {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}