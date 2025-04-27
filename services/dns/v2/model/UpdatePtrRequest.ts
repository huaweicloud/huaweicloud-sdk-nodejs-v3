import { UpdatePtrRequestBody } from './UpdatePtrRequestBody';


export class UpdatePtrRequest {
    private 'ptr_id'?: string;
    public body?: UpdatePtrRequestBody;
    public constructor(ptrId?: string) { 
        this['ptr_id'] = ptrId;
    }
    public withPtrId(ptrId: string): UpdatePtrRequest {
        this['ptr_id'] = ptrId;
        return this;
    }
    public set ptrId(ptrId: string  | undefined) {
        this['ptr_id'] = ptrId;
    }
    public get ptrId(): string | undefined {
        return this['ptr_id'];
    }
    public withBody(body: UpdatePtrRequestBody): UpdatePtrRequest {
        this['body'] = body;
        return this;
    }
}