

export class DeleteOuRequest {
    private 'ou_id'?: string;
    public constructor(ouId?: string) { 
        this['ou_id'] = ouId;
    }
    public withOuId(ouId: string): DeleteOuRequest {
        this['ou_id'] = ouId;
        return this;
    }
    public set ouId(ouId: string  | undefined) {
        this['ou_id'] = ouId;
    }
    public get ouId(): string | undefined {
        return this['ou_id'];
    }
}