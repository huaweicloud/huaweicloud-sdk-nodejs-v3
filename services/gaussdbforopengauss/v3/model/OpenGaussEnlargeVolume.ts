

export class OpenGaussEnlargeVolume {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): OpenGaussEnlargeVolume {
        this['size'] = size;
        return this;
    }
}