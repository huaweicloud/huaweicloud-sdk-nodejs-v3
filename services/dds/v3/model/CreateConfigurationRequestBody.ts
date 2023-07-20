import { DatastoreResult } from './DatastoreResult';


export class CreateConfigurationRequestBody {
    public name?: string;
    public description?: string;
    private 'parameter_values'?: { [key: string]: string; };
    public datastore?: DatastoreResult;
    public constructor(name?: string, description?: string, parameterValues?: { [key: string]: string; }, datastore?: DatastoreResult) { 
        this['name'] = name;
        this['description'] = description;
        this['parameter_values'] = parameterValues;
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
    public withParameterValues(parameterValues: { [key: string]: string; }): CreateConfigurationRequestBody {
        this['parameter_values'] = parameterValues;
        return this;
    }
    public set parameterValues(parameterValues: { [key: string]: string; }  | undefined) {
        this['parameter_values'] = parameterValues;
    }
    public get parameterValues(): { [key: string]: string; } | undefined {
        return this['parameter_values'];
    }
    public withDatastore(datastore: DatastoreResult): CreateConfigurationRequestBody {
        this['datastore'] = datastore;
        return this;
    }
}