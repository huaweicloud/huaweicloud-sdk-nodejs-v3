import { ParaGroupDatastore } from './ParaGroupDatastore';


export class ConfigurationForCreation {
    public name?: string;
    public description?: string;
    public datastore?: ParaGroupDatastore;
    public values?: { [key: string]: string; };
    public constructor(name?: string, datastore?: ParaGroupDatastore) { 
        this['name'] = name;
        this['datastore'] = datastore;
    }
    public withName(name: string): ConfigurationForCreation {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationForCreation {
        this['description'] = description;
        return this;
    }
    public withDatastore(datastore: ParaGroupDatastore): ConfigurationForCreation {
        this['datastore'] = datastore;
        return this;
    }
    public withValues(values: { [key: string]: string; }): ConfigurationForCreation {
        this['values'] = values;
        return this;
    }
}