import { Description } from './Description';
import { NonRequiredName } from './NonRequiredName';


export class UpdateCentralNetworkErRouteTableAttachment {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateCentralNetworkErRouteTableAttachment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateCentralNetworkErRouteTableAttachment {
        this['description'] = description;
        return this;
    }
}