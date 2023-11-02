
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportExcelJobResponse extends SdkResponse {
    public status?: string;
    private 'file_name'?: string;
    public link?: string;
    private 'err_code'?: string;
    private 'err_msg'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ExportExcelJobResponse {
        this['status'] = status;
        return this;
    }
    public withFileName(fileName: string): ExportExcelJobResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLink(link: string): ExportExcelJobResponse {
        this['link'] = link;
        return this;
    }
    public withErrCode(errCode: string): ExportExcelJobResponse {
        this['err_code'] = errCode;
        return this;
    }
    public set errCode(errCode: string  | undefined) {
        this['err_code'] = errCode;
    }
    public get errCode(): string | undefined {
        return this['err_code'];
    }
    public withErrMsg(errMsg: string): ExportExcelJobResponse {
        this['err_msg'] = errMsg;
        return this;
    }
    public set errMsg(errMsg: string  | undefined) {
        this['err_msg'] = errMsg;
    }
    public get errMsg(): string | undefined {
        return this['err_msg'];
    }
}