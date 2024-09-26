import { Description } from './Description';
import { NonDefaultAutoAssociateRouteEnabled } from './NonDefaultAutoAssociateRouteEnabled';
import { NonDefaultAutoPropagateRouteEnabled } from './NonDefaultAutoPropagateRouteEnabled';
import { NonRequiredName } from './NonRequiredName';
import { Tag } from './Tag';
import { Tags } from './Tags';


export class UpdateCentralNetwork {
    public name?: string;
    public description?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withName(name: string): UpdateCentralNetwork {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateCentralNetwork {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): UpdateCentralNetwork {
        this['tags'] = tags;
        return this;
    }
}