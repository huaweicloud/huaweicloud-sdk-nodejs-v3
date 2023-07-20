

export class InviteShareDTO {
    public share?: number;
    public constructor(share?: number) { 
        this['share'] = share;
    }
    public withShare(share: number): InviteShareDTO {
        this['share'] = share;
        return this;
    }
}