

export class UpdateInstanceConfig {
    public imageRef?: string;
    public constructor(imageRef?: string) { 
        this['imageRef'] = imageRef;
    }
    public withImageRef(imageRef: string): UpdateInstanceConfig {
        this['imageRef'] = imageRef;
        return this;
    }
}