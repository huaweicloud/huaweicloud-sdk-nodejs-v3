

export class NodeconfigSpecConfigsImageWarmUp {
    public id?: string;
    public name?: string;
    public creationTimestamp?: string;
    public type?: string;
    public image?: string;
    public constructor() { 
    }
    public withId(id: string): NodeconfigSpecConfigsImageWarmUp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NodeconfigSpecConfigsImageWarmUp {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): NodeconfigSpecConfigsImageWarmUp {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withType(type: string): NodeconfigSpecConfigsImageWarmUp {
        this['type'] = type;
        return this;
    }
    public withImage(image: string): NodeconfigSpecConfigsImageWarmUp {
        this['image'] = image;
        return this;
    }
}