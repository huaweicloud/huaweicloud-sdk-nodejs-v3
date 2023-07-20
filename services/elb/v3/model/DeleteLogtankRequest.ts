

export class DeleteLogtankRequest {
    private 'logtank_id'?: string;
    public constructor(logtankId?: string) { 
        this['logtank_id'] = logtankId;
    }
    public withLogtankId(logtankId: string): DeleteLogtankRequest {
        this['logtank_id'] = logtankId;
        return this;
    }
    public set logtankId(logtankId: string  | undefined) {
        this['logtank_id'] = logtankId;
    }
    public get logtankId(): string | undefined {
        return this['logtank_id'];
    }
}