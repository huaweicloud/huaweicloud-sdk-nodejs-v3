
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateFileResponse extends SdkResponse {
    public content?: string;
    public encoding?: string;
    private 'file_name'?: string | undefined;
    private 'file_path'?: string | undefined;
    private 'file_type'?: string | undefined;
    public constructor() { 
        super();
    }
    public withContent(content: string): ShowTemplateFileResponse {
        this['content'] = content;
        return this;
    }
    public withEncoding(encoding: string): ShowTemplateFileResponse {
        this['encoding'] = encoding;
        return this;
    }
    public withFileName(fileName: string): ShowTemplateFileResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withFilePath(filePath: string): ShowTemplateFileResponse {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath() {
        return this['file_path'];
    }
    public withFileType(fileType: string): ShowTemplateFileResponse {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
}