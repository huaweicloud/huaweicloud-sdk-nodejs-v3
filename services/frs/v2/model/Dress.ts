

export class Dress {
    public glass?: string;
    public hat?: string;
    public constructor() { 
    }
    public withGlass(glass: string): Dress {
        this['glass'] = glass;
        return this;
    }
    public withHat(hat: string): Dress {
        this['hat'] = hat;
        return this;
    }
}