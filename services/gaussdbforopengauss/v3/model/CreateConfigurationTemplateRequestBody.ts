import { DatastoreOption } from './DatastoreOption';


export class CreateConfigurationTemplateRequestBody {
    public name?: string;
    public description?: string;
    private 'parameter_values'?: { [key: string]: string; };
    public datastore?: DatastoreOption;
    public constructor(name?: string, datastore?: DatastoreOption) { 
        this['name'] = name;
        this['datastore'] = datastore;
    }
    public withName(name: string): CreateConfigurationTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateConfigurationTemplateRequestBody {
        this['description'] = description;
        return this;
    }
    public withParameterValues(parameterValues: { [key: string]: string; }): CreateConfigurationTemplateRequestBody {
        this['parameter_values'] = parameterValues;
        return this;
    }
    public set parameterValues(parameterValues: { [key: string]: string; }  | undefined) {
        this['parameter_values'] = parameterValues;
    }
    public get parameterValues(): { [key: string]: string; } | undefined {
        return this['parameter_values'];
    }
    public withDatastore(datastore: DatastoreOption): CreateConfigurationTemplateRequestBody {
        this['datastore'] = datastore;
        return this;
    }
}