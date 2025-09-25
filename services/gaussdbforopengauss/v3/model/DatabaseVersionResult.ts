import { DbHotfixInfoResult } from './DbHotfixInfoResult';


export class DatabaseVersionResult {
    private 'software_version'?: string;
    public hotfixes?: Array<DbHotfixInfoResult>;
    public constructor(softwareVersion?: string, hotfixes?: Array<DbHotfixInfoResult>) { 
        this['software_version'] = softwareVersion;
        this['hotfixes'] = hotfixes;
    }
    public withSoftwareVersion(softwareVersion: string): DatabaseVersionResult {
        this['software_version'] = softwareVersion;
        return this;
    }
    public set softwareVersion(softwareVersion: string  | undefined) {
        this['software_version'] = softwareVersion;
    }
    public get softwareVersion(): string | undefined {
        return this['software_version'];
    }
    public withHotfixes(hotfixes: Array<DbHotfixInfoResult>): DatabaseVersionResult {
        this['hotfixes'] = hotfixes;
        return this;
    }
}