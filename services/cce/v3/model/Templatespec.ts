import { Versions } from './Versions';


export class Templatespec {
    public type: string;
    public require?: boolean;
    public labels: Array<string>;
    public logoURL: string;
    public readmeURL: string;
    public description: string;
    public versions: Array<Versions>;
    public constructor(type?: any, labels?: any, logoURL?: any, readmeURL?: any, description?: any, versions?: any) { 
        this['type'] = type;
        this['labels'] = labels;
        this['logoURL'] = logoURL;
        this['readmeURL'] = readmeURL;
        this['description'] = description;
        this['versions'] = versions;
    }
    public withType(type: string): Templatespec {
        this['type'] = type;
        return this;
    }
    public withRequire(require: boolean): Templatespec {
        this['require'] = require;
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
    public withDescription(description: string): Templatespec {
        this['description'] = description;
        return this;
    }
    public withVersions(versions: Array<Versions>): Templatespec {
        this['versions'] = versions;
        return this;
    }
}