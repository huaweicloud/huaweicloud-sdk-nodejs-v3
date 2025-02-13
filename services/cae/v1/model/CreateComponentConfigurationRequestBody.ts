import { ApiVersionObj } from './ApiVersionObj';
import { ComponentConfigurationKindObj } from './ComponentConfigurationKindObj';
import { ConfigurationItem } from './ConfigurationItem';


export class CreateComponentConfigurationRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentConfigurationKindObj;
    public items?: Array<ConfigurationItem>;
    public constructor(apiVersion?: ApiVersionObj, kind?: ComponentConfigurationKindObj, items?: Array<ConfigurationItem>) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['items'] = items;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateComponentConfigurationRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentConfigurationKindObj): CreateComponentConfigurationRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<ConfigurationItem>): CreateComponentConfigurationRequestBody {
        this['items'] = items;
        return this;
    }
}