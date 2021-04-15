import { Versions } from './Versions';


export class Templatespec {
    public description: string;
    public labels: Array<string>;
    public logoURL: string;
    public readmeURL: string;
    public require?: boolean;
    public type: string;
    public versions: Array<Versions>;
    public constructor(description?: any, labels?: any, logoURL?: any, readmeURL?: any, type?: any, versions?: any) { 
        this['description'] = description;
        this['labels'] = labels;
        this['logoURL'] = logoURL;
        this['readmeURL'] = readmeURL;
        this['type'] = type;
        this['versions'] = versions;
    }
    public withDescription(description: string): Templatespec {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: Array<string>): Templatespec {
        this['labels'] = labels;
        return this;
    }
    public withLogoURL(logoURL: string): Templatespec {
        this['logoURL'] = logoURL;
        return this;
    }
    public withReadmeURL(readmeURL: string): Templatespec {
        this['readmeURL'] = readmeURL;
        return this;
    }
    public withRequire(require: boolean): Templatespec {
        this['require'] = require;
        return this;
    }
    public withType(type: string): Templatespec {
        this['type'] = type;
        return this;
    }
    public withVersions(versions: Array<Versions>): Templatespec {
        this['versions'] = versions;
        return this;
    }
}