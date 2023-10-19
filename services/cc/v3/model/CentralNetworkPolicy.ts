import { CentralNetworkId } from './CentralNetworkId';
import { CentralNetworkPolicyDocument } from './CentralNetworkPolicyDocument';
import { CentralNetworkPolicyState } from './CentralNetworkPolicyState';
import { CentralNetworkPolicyStateEnum } from './CentralNetworkPolicyStateEnum';
import { CreatedAt } from './CreatedAt';
import { DocumentTemplateVersion } from './DocumentTemplateVersion';
import { DocumentTemplateVersionEnum } from './DocumentTemplateVersionEnum';
import { DomainId } from './DomainId';
import { UUIDIdentifier } from './UUIDIdentifier';


export class CentralNetworkPolicy {
    public id?: string;
    private 'created_at'?: Date;
    private 'domain_id'?: string;
    public state?: CentralNetworkPolicyStateEnum;
    private 'central_network_id'?: string;
    private 'document_template_version'?: DocumentTemplateVersionEnum;
    private 'is_applied'?: boolean;
    public version?: number;
    public document?: CentralNetworkPolicyDocument;
    public constructor(id?: string, createdAt?: Date, domainId?: string, state?: CentralNetworkPolicyStateEnum, centralNetworkId?: string, documentTemplateVersion?: DocumentTemplateVersionEnum, isApplied?: boolean, version?: number, document?: CentralNetworkPolicyDocument) { 
        this['id'] = id;
        this['created_at'] = createdAt;
        this['domain_id'] = domainId;
        this['state'] = state;
        this['central_network_id'] = centralNetworkId;
        this['document_template_version'] = documentTemplateVersion;
        this['is_applied'] = isApplied;
        this['version'] = version;
        this['document'] = document;
    }
    public withId(id: string): CentralNetworkPolicy {
        this['id'] = id;
        return this;
    }
    public withCreatedAt(createdAt: Date): CentralNetworkPolicy {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withDomainId(domainId: string): CentralNetworkPolicy {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withState(state: CentralNetworkPolicyStateEnum): CentralNetworkPolicy {
        this['state'] = state;
        return this;
    }
    public withCentralNetworkId(centralNetworkId: string): CentralNetworkPolicy {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withDocumentTemplateVersion(documentTemplateVersion: DocumentTemplateVersionEnum): CentralNetworkPolicy {
        this['document_template_version'] = documentTemplateVersion;
        return this;
    }
    public set documentTemplateVersion(documentTemplateVersion: DocumentTemplateVersionEnum  | undefined) {
        this['document_template_version'] = documentTemplateVersion;
    }
    public get documentTemplateVersion(): DocumentTemplateVersionEnum | undefined {
        return this['document_template_version'];
    }
    public withIsApplied(isApplied: boolean): CentralNetworkPolicy {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: boolean  | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied(): boolean | undefined {
        return this['is_applied'];
    }
    public withVersion(version: number): CentralNetworkPolicy {
        this['version'] = version;
        return this;
    }
    public withDocument(document: CentralNetworkPolicyDocument): CentralNetworkPolicy {
        this['document'] = document;
        return this;
    }
}