

export class NodeconfigUpdateSpecConfigsImageWarmUp {
    public id?: string;
    public name?: string;
    public creationTimestamp?: string;
    public type?: NodeconfigUpdateSpecConfigsImageWarmUpTypeEnum | string;
    public image?: string;
    public constructor() { 
    }
    public withId(id: string): NodeconfigUpdateSpecConfigsImageWarmUp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NodeconfigUpdateSpecConfigsImageWarmUp {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): NodeconfigUpdateSpecConfigsImageWarmUp {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withType(type: NodeconfigUpdateSpecConfigsImageWarmUpTypeEnum | string): NodeconfigUpdateSpecConfigsImageWarmUp {
        this['type'] = type;
        return this;
    }
    public withImage(image: string): NodeconfigUpdateSpecConfigsImageWarmUp {
        this['image'] = image;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeconfigUpdateSpecConfigsImageWarmUpTypeEnum {
    SWR = 'SWR'
}
