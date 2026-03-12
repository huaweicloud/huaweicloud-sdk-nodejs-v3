import { SubjectAlternativeName } from './SubjectAlternativeName';
import { Validity } from './Validity';


export class CreateCertificateByCsrRequestBody {
    private 'issuer_id'?: string;
    public csr?: string;
    public validity?: Validity;
    public type?: string;
    private 'path_length'?: number;
    private 'subject_alternative_names'?: Array<SubjectAlternativeName>;
    private 'enterprise_project_id'?: string;
    public constructor(issuerId?: string, csr?: string, validity?: Validity) { 
        this['issuer_id'] = issuerId;
        this['csr'] = csr;
        this['validity'] = validity;
    }
    public withIssuerId(issuerId: string): CreateCertificateByCsrRequestBody {
        this['issuer_id'] = issuerId;
        return this;
    }
    public set issuerId(issuerId: string  | undefined) {
        this['issuer_id'] = issuerId;
    }
    public get issuerId(): string | undefined {
        return this['issuer_id'];
    }
    public withCsr(csr: string): CreateCertificateByCsrRequestBody {
        this['csr'] = csr;
        return this;
    }
    public withValidity(validity: Validity): CreateCertificateByCsrRequestBody {
        this['validity'] = validity;
        return this;
    }
    public withType(type: string): CreateCertificateByCsrRequestBody {
        this['type'] = type;
        return this;
    }
    public withPathLength(pathLength: number): CreateCertificateByCsrRequestBody {
        this['path_length'] = pathLength;
        return this;
    }
    public set pathLength(pathLength: number  | undefined) {
        this['path_length'] = pathLength;
    }
    public get pathLength(): number | undefined {
        return this['path_length'];
    }
    public withSubjectAlternativeNames(subjectAlternativeNames: Array<SubjectAlternativeName>): CreateCertificateByCsrRequestBody {
        this['subject_alternative_names'] = subjectAlternativeNames;
        return this;
    }
    public set subjectAlternativeNames(subjectAlternativeNames: Array<SubjectAlternativeName>  | undefined) {
        this['subject_alternative_names'] = subjectAlternativeNames;
    }
    public get subjectAlternativeNames(): Array<SubjectAlternativeName> | undefined {
        return this['subject_alternative_names'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateByCsrRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}