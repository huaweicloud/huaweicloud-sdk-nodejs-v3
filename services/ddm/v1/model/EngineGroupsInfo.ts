import { SupportAzsInfo } from './SupportAzsInfo';


export class EngineGroupsInfo {
    public id?: string;
    public name?: string;
    public version?: string;
    public supportAzs?: Array<SupportAzsInfo>;
    public constructor() { 
    }
    public withId(id: string): EngineGroupsInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EngineGroupsInfo {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): EngineGroupsInfo {
        this['version'] = version;
        return this;
    }
    public withSupportAzs(supportAzs: Array<SupportAzsInfo>): EngineGroupsInfo {
        this['supportAzs'] = supportAzs;
        return this;
    }
}