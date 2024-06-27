import { CaptureFile } from './CaptureFile';
import { HostHeaderInfo } from './HostHeaderInfo';


export class CaptureResultUrlVO {
    public captcha?: string;
    public expires?: number;
    private 'file_list'?: Array<CaptureFile>;
    private 'request_header'?: HostHeaderInfo;
    public url?: string;
    public constructor() { 
    }
    public withCaptcha(captcha: string): CaptureResultUrlVO {
        this['captcha'] = captcha;
        return this;
    }
    public withExpires(expires: number): CaptureResultUrlVO {
        this['expires'] = expires;
        return this;
    }
    public withFileList(fileList: Array<CaptureFile>): CaptureResultUrlVO {
        this['file_list'] = fileList;
        return this;
    }
    public set fileList(fileList: Array<CaptureFile>  | undefined) {
        this['file_list'] = fileList;
    }
    public get fileList(): Array<CaptureFile> | undefined {
        return this['file_list'];
    }
    public withRequestHeader(requestHeader: HostHeaderInfo): CaptureResultUrlVO {
        this['request_header'] = requestHeader;
        return this;
    }
    public set requestHeader(requestHeader: HostHeaderInfo  | undefined) {
        this['request_header'] = requestHeader;
    }
    public get requestHeader(): HostHeaderInfo | undefined {
        return this['request_header'];
    }
    public withUrl(url: string): CaptureResultUrlVO {
        this['url'] = url;
        return this;
    }
}