import { HyperNodeMetadataOwnerReference } from './HyperNodeMetadataOwnerReference';


export class HyperNodeMetadata {
    public name?: string;
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public ownerReference?: HyperNodeMetadataOwnerReference;
    public constructor() { 
    }
    public withName(name: string): HyperNodeMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): HyperNodeMetadata {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): HyperNodeMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): HyperNodeMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withOwnerReference(ownerReference: HyperNodeMetadataOwnerReference): HyperNodeMetadata {
        this['ownerReference'] = ownerReference;
        return this;
    }
}