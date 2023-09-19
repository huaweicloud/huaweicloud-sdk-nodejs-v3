

export class CreateClusterPublicEipSize {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): CreateClusterPublicEipSize {
        this['size'] = size;
        return this;
    }
}