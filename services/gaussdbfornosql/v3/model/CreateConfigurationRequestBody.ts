import { CreateConfigurationDatastoreOption } from './CreateConfigurationDatastoreOption';


export class CreateConfigurationRequestBody {
    public name?: string;
    public description?: string;
    public datastore?: CreateConfigurationDatastoreOption;
    public values?: { [key: string]: string; };
    private 'instance_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
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
    public withInstanceId(instanceId: string): CreateConfigurationRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}