import { CreateConfigurationDatastoreOption } from './CreateConfigurationDatastoreOption';


export class CreateConfigurationRequestBody {
    public name?: string;
    public description?: string;
    public datastore?: CreateConfigurationDatastoreOption;
    public values?: { [key: string]: string; };
    public constructor(name?: string, datastore?: CreateConfigurationDatastoreOption) { 
        this['name'] = name;
        this['datastore'] = datastore;
    }
    public withName(name: string): CreateConfigurationRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateConfigurationRequestBody {
        this['description'] = description;
        return this;
    }
    public withDatastore(datastore: CreateConfigurationDatastoreOption): CreateConfigurationRequestBody {
        this['datastore'] = datastore;
        return this;
    }
    public withValues(values: { [key: string]: string; }): CreateConfigurationRequestBody {
        this['values'] = values;
        return this;
    }
}