

export class DeleteLogtankRequest {
    private 'logtank_id': string | undefined;
    public constructor(logtankId?: any) { 
        this['logtank_id'] = logtankId;
    }
    public withLogtankId(logtankId: string): DeleteLogtankRequest {
        this['logtank_id'] = logtankId;
        return this;
    }
    public set logtankId(logtankId: string | undefined) {
        this['logtank_id'] = logtankId;
    }
    public get logtankId() {
        return this['logtank_id'];
    }
}