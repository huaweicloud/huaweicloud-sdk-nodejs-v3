import { BatchOperateTagRequestBody } from './BatchOperateTagRequestBody';


export class BatchDeleteCertTagsRequest {
    private 'certificate_id'?: string;
    public body?: BatchOperateTagRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): BatchDeleteCertTagsRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: BatchOperateTagRequestBody): BatchDeleteCertTagsRequest {
        this['body'] = body;
        return this;
    }
}