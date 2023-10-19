import { Description } from './Description';
import { NonRequiredName } from './NonRequiredName';


export class UpdateCentralNetworkGdgwAttachment {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateCentralNetworkGdgwAttachment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateCentralNetworkGdgwAttachment {
        this['description'] = description;
        return this;
    }
}