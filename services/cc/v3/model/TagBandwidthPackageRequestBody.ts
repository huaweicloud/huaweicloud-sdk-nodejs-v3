import { Tag } from './Tag';


export class TagBandwidthPackageRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): TagBandwidthPackageRequestBody {
        this['tags'] = tags;
        return this;
    }
}