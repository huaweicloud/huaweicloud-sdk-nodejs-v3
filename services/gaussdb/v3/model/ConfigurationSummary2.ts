import { DatastoreResult } from './DatastoreResult';


export class ConfigurationSummary2 {
    public id?: string;
    public name?: string;
    public description?: string;
    public datastore?: DatastoreResult;
    public created?: string;
    public updated?: string;
    public constructor() { 
    }
    public withId(id: string): ConfigurationSummary2 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConfigurationSummary2 {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationSummary2 {
        this['description'] = description;
        return this;
    }
    public withDatastore(datastore: DatastoreResult): ConfigurationSummary2 {
        this['datastore'] = datastore;
        return this;
    }
    public withCreated(created: string): ConfigurationSummary2 {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ConfigurationSummary2 {
        this['updated'] = updated;
        return this;
    }
}