import { ObsInfo } from './ObsInfo';


export class CreateObjectReplicationRequestBody {
    private 'src_info'?: ObsInfo;
    private 'file_type'?: string;
    private 'dest_info'?: ObsInfo;
    private 'category_id'?: object;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public constructor(srcInfo?: ObsInfo, destInfo?: ObsInfo) { 
        this['src_info'] = srcInfo;
        this['dest_info'] = destInfo;
    }
    public withSrcInfo(srcInfo: ObsInfo): CreateObjectReplicationRequestBody {
        this['src_info'] = srcInfo;
        return this;
    }
    public set srcInfo(srcInfo: ObsInfo  | undefined) {
        this['src_info'] = srcInfo;
    }
    public get srcInfo(): ObsInfo | undefined {
        return this['src_info'];
    }
    public withFileType(fileType: string): CreateObjectReplicationRequestBody {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withDestInfo(destInfo: ObsInfo): CreateObjectReplicationRequestBody {
        this['dest_info'] = destInfo;
        return this;
    }
    public set destInfo(destInfo: ObsInfo  | undefined) {
        this['dest_info'] = destInfo;
    }
    public get destInfo(): ObsInfo | undefined {
        return this['dest_info'];
    }
    public withCategoryId(categoryId: object): CreateObjectReplicationRequestBody {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: object  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): object | undefined {
        return this['category_id'];
    }
    public withCallbackUrl(callbackUrl: string): CreateObjectReplicationRequestBody {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): CreateObjectReplicationRequestBody {
        this['session_context'] = sessionContext;
        return this;
    }
    public set sessionContext(sessionContext: string  | undefined) {
        this['session_context'] = sessionContext;
    }
    public get sessionContext(): string | undefined {
        return this['session_context'];
    }
}