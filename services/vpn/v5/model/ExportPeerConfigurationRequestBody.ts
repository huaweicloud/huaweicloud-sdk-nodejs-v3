

export class ExportPeerConfigurationRequestBody {
    public vendor?: string;
    public type?: string;
    public model?: string;
    public version?: string;
    public constructor(vendor?: string, type?: string, model?: string, version?: string) { 
        this['vendor'] = vendor;
        this['type'] = type;
        this['model'] = model;
        this['version'] = version;
    }
    public withVendor(vendor: string): ExportPeerConfigurationRequestBody {
        this['vendor'] = vendor;
        return this;
    }
    public withType(type: string): ExportPeerConfigurationRequestBody {
        this['type'] = type;
        return this;
    }
    public withModel(model: string): ExportPeerConfigurationRequestBody {
        this['model'] = model;
        return this;
    }
    public withVersion(version: string): ExportPeerConfigurationRequestBody {
        this['version'] = version;
        return this;
    }
}