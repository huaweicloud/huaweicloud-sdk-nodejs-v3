import { DataResourceHead } from './DataResourceHead';


export class AffectedResource {
    private 'affected_attached_domain_id'?: string;
    private 'affected_attached_project_id'?: string;
    private 'affected_head'?: DataResourceHead;
    private 'affected_properties'?: object;
    private 'affected_protected_id'?: string;
    private 'affected_subtype'?: string;
    private 'affected_type'?: string;
    private 'affected_urn'?: string;
    private 'affected_urnext'?: string;
    private 'affected_value'?: string;
    public constructor() { 
    }
    public withAffectedAttachedDomainId(affectedAttachedDomainId: string): AffectedResource {
        this['affected_attached_domain_id'] = affectedAttachedDomainId;
        return this;
    }
    public set affectedAttachedDomainId(affectedAttachedDomainId: string  | undefined) {
        this['affected_attached_domain_id'] = affectedAttachedDomainId;
    }
    public get affectedAttachedDomainId(): string | undefined {
        return this['affected_attached_domain_id'];
    }
    public withAffectedAttachedProjectId(affectedAttachedProjectId: string): AffectedResource {
        this['affected_attached_project_id'] = affectedAttachedProjectId;
        return this;
    }
    public set affectedAttachedProjectId(affectedAttachedProjectId: string  | undefined) {
        this['affected_attached_project_id'] = affectedAttachedProjectId;
    }
    public get affectedAttachedProjectId(): string | undefined {
        return this['affected_attached_project_id'];
    }
    public withAffectedHead(affectedHead: DataResourceHead): AffectedResource {
        this['affected_head'] = affectedHead;
        return this;
    }
    public set affectedHead(affectedHead: DataResourceHead  | undefined) {
        this['affected_head'] = affectedHead;
    }
    public get affectedHead(): DataResourceHead | undefined {
        return this['affected_head'];
    }
    public withAffectedProperties(affectedProperties: object): AffectedResource {
        this['affected_properties'] = affectedProperties;
        return this;
    }
    public set affectedProperties(affectedProperties: object  | undefined) {
        this['affected_properties'] = affectedProperties;
    }
    public get affectedProperties(): object | undefined {
        return this['affected_properties'];
    }
    public withAffectedProtectedId(affectedProtectedId: string): AffectedResource {
        this['affected_protected_id'] = affectedProtectedId;
        return this;
    }
    public set affectedProtectedId(affectedProtectedId: string  | undefined) {
        this['affected_protected_id'] = affectedProtectedId;
    }
    public get affectedProtectedId(): string | undefined {
        return this['affected_protected_id'];
    }
    public withAffectedSubtype(affectedSubtype: string): AffectedResource {
        this['affected_subtype'] = affectedSubtype;
        return this;
    }
    public set affectedSubtype(affectedSubtype: string  | undefined) {
        this['affected_subtype'] = affectedSubtype;
    }
    public get affectedSubtype(): string | undefined {
        return this['affected_subtype'];
    }
    public withAffectedType(affectedType: string): AffectedResource {
        this['affected_type'] = affectedType;
        return this;
    }
    public set affectedType(affectedType: string  | undefined) {
        this['affected_type'] = affectedType;
    }
    public get affectedType(): string | undefined {
        return this['affected_type'];
    }
    public withAffectedUrn(affectedUrn: string): AffectedResource {
        this['affected_urn'] = affectedUrn;
        return this;
    }
    public set affectedUrn(affectedUrn: string  | undefined) {
        this['affected_urn'] = affectedUrn;
    }
    public get affectedUrn(): string | undefined {
        return this['affected_urn'];
    }
    public withAffectedUrnext(affectedUrnext: string): AffectedResource {
        this['affected_urnext'] = affectedUrnext;
        return this;
    }
    public set affectedUrnext(affectedUrnext: string  | undefined) {
        this['affected_urnext'] = affectedUrnext;
    }
    public get affectedUrnext(): string | undefined {
        return this['affected_urnext'];
    }
    public withAffectedValue(affectedValue: string): AffectedResource {
        this['affected_value'] = affectedValue;
        return this;
    }
    public set affectedValue(affectedValue: string  | undefined) {
        this['affected_value'] = affectedValue;
    }
    public get affectedValue(): string | undefined {
        return this['affected_value'];
    }
}