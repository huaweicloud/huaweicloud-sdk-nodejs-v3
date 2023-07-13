import { ListEngineSupportFeaturesPropertiesEntity } from './ListEngineSupportFeaturesPropertiesEntity';


export class ListEngineSupportFeaturesEntity {
    public name?: string;
    public properties?: ListEngineSupportFeaturesPropertiesEntity;
    public constructor() { 
    }
    public withName(name: string): ListEngineSupportFeaturesEntity {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: ListEngineSupportFeaturesPropertiesEntity): ListEngineSupportFeaturesEntity {
        this['properties'] = properties;
        return this;
    }
}