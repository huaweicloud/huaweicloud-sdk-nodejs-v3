

export class InviteShareDTO {
    public share: number;
    public constructor(share?: any) { 
        this['share'] = share;
    }
    public withShare(share: number): InviteShareDTO {
        this['share'] = share;
        return this;
    }
}