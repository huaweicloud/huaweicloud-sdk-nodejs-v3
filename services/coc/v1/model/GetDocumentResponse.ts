import { DocumentVersionVo } from './DocumentVersionVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetDocumentResponse extends SdkResponse {
    public id?: string;
    private 'document_id'?: string;
    public name?: string;
    public content?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public version?: string;
    public creator?: string;
    public modifier?: string;
    private 'enterprise_project_id'?: string;
    public versions?: Array<DocumentVersionVo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): GetDocumentResponse {
        this['id'] = id;
        return this;
    }
    public withDocumentId(documentId: string): GetDocumentResponse {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withName(name: string): GetDocumentResponse {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): GetDocumentResponse {
        this['content'] = content;
        return this;
    }
    public withCreateTime(createTime: number): GetDocumentResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): GetDocumentResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVersion(version: string): GetDocumentResponse {
        this['version'] = version;
        return this;
    }
    public withCreator(creator: string): GetDocumentResponse {
        this['creator'] = creator;
        return this;
    }
    public withModifier(modifier: string): GetDocumentResponse {
        this['modifier'] = modifier;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GetDocumentResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVersions(versions: Array<DocumentVersionVo>): GetDocumentResponse {
        this['versions'] = versions;
        return this;
    }
    public withXRequestId(xRequestId: string): GetDocumentResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}