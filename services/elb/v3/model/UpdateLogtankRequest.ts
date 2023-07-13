import { UpdateLogtankRequestBody } from './UpdateLogtankRequestBody';


export class UpdateLogtankRequest {
    private 'logtank_id': string | undefined;
    public body?: UpdateLogtankRequestBody;
    public constructor(logtankId?: any) { 
        this['logtank_id'] = logtankId;
    }
    public withLogtankId(logtankId: string): UpdateLogtankRequest {
        this['logtank_id'] = logtankId;
        return this;
    }
    public set logtankId(logtankId: string | undefined) {
        this['logtank_id'] = logtankId;
    }
    public get logtankId() {
        return this['logtank_id'];
    }
    public withBody(body: UpdateLogtankRequestBody): UpdateLogtankRequest {
        this['body'] = body;
        return this;
    }
}