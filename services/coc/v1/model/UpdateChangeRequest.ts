import { CocUpdateChangeRequestBodyV2 } from './CocUpdateChangeRequestBodyV2';


export class UpdateChangeRequest {
    private 'change_id'?: string;
    public body?: CocUpdateChangeRequestBodyV2;
    public constructor(changeId?: string) { 
        this['change_id'] = changeId;
    }
    public withChangeId(changeId: string): UpdateChangeRequest {
        this['change_id'] = changeId;
        return this;
    }
    public set changeId(changeId: string  | undefined) {
        this['change_id'] = changeId;
    }
    public get changeId(): string | undefined {
        return this['change_id'];
    }
    public withBody(body: CocUpdateChangeRequestBodyV2): UpdateChangeRequest {
        this['body'] = body;
        return this;
    }
}