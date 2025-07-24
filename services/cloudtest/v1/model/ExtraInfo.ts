import { AwVariable } from './AwVariable';
import { MockInfo } from './MockInfo';


export class ExtraInfo {
    public childImportPackage?: Array<string>;
    private 'document_link'?: string;
    private 'http_method'?: string;
    private 'http_url'?: string;
    public importPackage?: Array<string>;
    public mock?: MockInfo;
    public outputParam?: Array<AwVariable>;
    private 'param_dependent'?: string;
    public summary?: string;
    public constructor() { 
    }
    public withChildImportPackage(childImportPackage: Array<string>): ExtraInfo {
        this['childImportPackage'] = childImportPackage;
        return this;
    }
    public withDocumentLink(documentLink: string): ExtraInfo {
        this['document_link'] = documentLink;
        return this;
    }
    public set documentLink(documentLink: string  | undefined) {
        this['document_link'] = documentLink;
    }
    public get documentLink(): string | undefined {
        return this['document_link'];
    }
    public withHttpMethod(httpMethod: string): ExtraInfo {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withHttpUrl(httpUrl: string): ExtraInfo {
        this['http_url'] = httpUrl;
        return this;
    }
    public set httpUrl(httpUrl: string  | undefined) {
        this['http_url'] = httpUrl;
    }
    public get httpUrl(): string | undefined {
        return this['http_url'];
    }
    public withImportPackage(importPackage: Array<string>): ExtraInfo {
        this['importPackage'] = importPackage;
        return this;
    }
    public withMock(mock: MockInfo): ExtraInfo {
        this['mock'] = mock;
        return this;
    }
    public withOutputParam(outputParam: Array<AwVariable>): ExtraInfo {
        this['outputParam'] = outputParam;
        return this;
    }
    public withParamDependent(paramDependent: string): ExtraInfo {
        this['param_dependent'] = paramDependent;
        return this;
    }
    public set paramDependent(paramDependent: string  | undefined) {
        this['param_dependent'] = paramDependent;
    }
    public get paramDependent(): string | undefined {
        return this['param_dependent'];
    }
    public withSummary(summary: string): ExtraInfo {
        this['summary'] = summary;
        return this;
    }
}