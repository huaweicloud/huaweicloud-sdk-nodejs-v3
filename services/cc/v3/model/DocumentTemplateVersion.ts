import { DocumentTemplateVersionEnum } from './DocumentTemplateVersionEnum';


export class DocumentTemplateVersion {
    private 'document_template_version'?: DocumentTemplateVersionEnum;
    public constructor(documentTemplateVersion?: DocumentTemplateVersionEnum) { 
        this['document_template_version'] = documentTemplateVersion;
    }
    public withDocumentTemplateVersion(documentTemplateVersion: DocumentTemplateVersionEnum): DocumentTemplateVersion {
        this['document_template_version'] = documentTemplateVersion;
        return this;
    }
    public set documentTemplateVersion(documentTemplateVersion: DocumentTemplateVersionEnum  | undefined) {
        this['document_template_version'] = documentTemplateVersion;
    }
    public get documentTemplateVersion(): DocumentTemplateVersionEnum | undefined {
        return this['document_template_version'];
    }
}