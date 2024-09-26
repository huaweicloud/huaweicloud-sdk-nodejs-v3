

export class GcbBorderCross {
    public bordercross?: boolean;
    public constructor(bordercross?: boolean) { 
        this['bordercross'] = bordercross;
    }
    public withBordercross(bordercross: boolean): GcbBorderCross {
        this['bordercross'] = bordercross;
        return this;
    }
}