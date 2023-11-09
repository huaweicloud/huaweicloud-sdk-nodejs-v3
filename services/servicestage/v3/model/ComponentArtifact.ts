

export class ComponentArtifact {
    public type?: ComponentArtifactTypeEnum | string;
    public url?: string;
    public constructor() { 
    }
    public withType(type: ComponentArtifactTypeEnum | string): ComponentArtifact {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ComponentArtifact {
        this['url'] = url;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentArtifactTypeEnum {
    IMAGE = 'image',
    PACKAGE = 'package'
}
