

export class GcbBorderCross {
    public bordercross?: boolean;
    public constructor() { 
    }
    public withBordercross(bordercross: boolean): GcbBorderCross {
        this['bordercross'] = bordercross;
        return this;
    }
}