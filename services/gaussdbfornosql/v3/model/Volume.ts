

export class Volume {
    public size?: string;
    public used?: string;
    private 'gift_size'?: string;
    public constructor(size?: string, used?: string) { 
        this['size'] = size;
        this['used'] = used;
    }
    public withSize(size: string): Volume {
        this['size'] = size;
        return this;
    }
    public withUsed(used: string): Volume {
        this['used'] = used;
        return this;
    }
    public withGiftSize(giftSize: string): Volume {
        this['gift_size'] = giftSize;
        return this;
    }
    public set giftSize(giftSize: string  | undefined) {
        this['gift_size'] = giftSize;
    }
    public get giftSize(): string | undefined {
        return this['gift_size'];
    }
}