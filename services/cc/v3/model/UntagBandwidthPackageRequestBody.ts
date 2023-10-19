import { Tag } from './Tag';


export class UntagBandwidthPackageRequestBody {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): UntagBandwidthPackageRequestBody {
        this['tags'] = tags;
        return this;
    }
}