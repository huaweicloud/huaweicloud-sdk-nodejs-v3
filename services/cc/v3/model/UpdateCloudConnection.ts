import { Description } from './Description';
import { NonRequiredName } from './NonRequiredName';


export class UpdateCloudConnection {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateCloudConnection {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateCloudConnection {
        this['description'] = description;
        return this;
    }
}