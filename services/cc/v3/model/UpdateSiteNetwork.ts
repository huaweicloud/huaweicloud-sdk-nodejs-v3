import { Description } from './Description';
import { NonRequiredName } from './NonRequiredName';
import { Tag } from './Tag';
import { Tags } from './Tags';


export class UpdateSiteNetwork {
    public name?: string;
    public description?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withName(name: string): UpdateSiteNetwork {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSiteNetwork {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): UpdateSiteNetwork {
        this['tags'] = tags;
        return this;
    }
}