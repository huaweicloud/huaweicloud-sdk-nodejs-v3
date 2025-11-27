import { AddonVersion } from './AddonVersion';


export class AddonTemplateSpec {
    public type?: string;
    public require?: boolean;
    public labels?: Array<string>;
    public logoURL?: string;
    public readmeURL?: string;
    public description?: string;
    public versions?: Array<AddonVersion>;
    public constructor() { 
    }
    public withType(type: string): AddonTemplateSpec {
        this['type'] = type;
        return this;
    }
    public withRequire(require: boolean): AddonTemplateSpec {
        this['require'] = require;
        return this;
    }
    public withLabels(labels: Array<string>): AddonTemplateSpec {
        this['labels'] = labels;
        return this;
    }
    public withLogoURL(logoURL: string): AddonTemplateSpec {
        this['logoURL'] = logoURL;
        return this;
    }
    public withReadmeURL(readmeURL: string): AddonTemplateSpec {
        this['readmeURL'] = readmeURL;
        return this;
    }
    public withDescription(description: string): AddonTemplateSpec {
        this['description'] = description;
        return this;
    }
    public withVersions(versions: Array<AddonVersion>): AddonTemplateSpec {
        this['versions'] = versions;
        return this;
    }
}